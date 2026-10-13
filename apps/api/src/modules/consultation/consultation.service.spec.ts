import { ConflictException, NotFoundException } from '@nestjs/common';

import {
  AccountStatus,
  ConsultationStatus,
  VisibilityStatus,
} from '@prisma/client';

import { PrismaService } from '../../prisma/prisma.service';

import { ConsultationService } from './consultation.service';

describe('ConsultationService', () => {
  const startupFindFirst = jest.fn();

  const advisorFindFirst = jest.fn();

  const requestFindFirst = jest.fn();

  const requestFindUnique = jest.fn();

  const requestFindMany = jest.fn();

  const requestCreate = jest.fn();

  const requestUpdate = jest.fn();

  const prisma = {
    startup: {
      findFirst: startupFindFirst,
    },

    advisorProfile: {
      findFirst: advisorFindFirst,
    },

    consultationRequest: {
      findFirst: requestFindFirst,

      findUnique: requestFindUnique,

      findMany: requestFindMany,

      create: requestCreate,

      update: requestUpdate,
    },
  } as unknown as PrismaService;

  let service: ConsultationService;

  const createDto = {
    advisorId: 'advisor-1',

    startupId: 'startup-1',

    message: 'I need support with MVP planning.',
  };

  beforeEach(() => {
    jest.clearAllMocks();

    service = new ConsultationService(prisma);
  });

  it('rejects a consultation targeting an unpublished advisor', async () => {
    startupFindFirst.mockResolvedValue({
      id: 'startup-1',
    });

    advisorFindFirst.mockResolvedValue(null);

    await expect(service.create('founder-1', createDto)).rejects.toBeInstanceOf(
      NotFoundException,
    );

    expect(advisorFindFirst).toHaveBeenCalledWith({
      where: {
        id: 'advisor-1',

        accountStatus: AccountStatus.APPROVED,

        visibilityStatus: VisibilityStatus.PUBLISHED,
      },

      select: {
        id: true,
      },
    });

    expect(requestCreate).not.toHaveBeenCalled();
  });

  it('creates a consultation for the authenticated founder owned startup', async () => {
    startupFindFirst.mockResolvedValue({
      id: 'startup-1',
    });

    advisorFindFirst.mockResolvedValue({
      id: 'advisor-1',
    });

    requestFindFirst.mockResolvedValue(null);

    requestCreate.mockResolvedValue({
      id: 'request-1',
      advisorId: 'advisor-1',
      startupId: 'startup-1',
      message: 'I need support with MVP planning.',
      status: ConsultationStatus.NEW,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const result = await service.create('founder-1', createDto);

    expect(startupFindFirst).toHaveBeenCalledWith({
      where: {
        id: 'startup-1',
        founderId: 'founder-1',
      },

      select: {
        id: true,
      },
    });

    expect(requestCreate).toHaveBeenCalledWith(
      expect.objectContaining({
        data: {
          founderId: 'founder-1',
          advisorId: 'advisor-1',
          startupId: 'startup-1',
          message: 'I need support with MVP planning.',
          status: ConsultationStatus.NEW,
        },
      }),
    );

    expect(result.status).toBe(ConsultationStatus.NEW);
  });

  it('rejects consultation creation for a startup not owned by the founder', async () => {
    startupFindFirst.mockResolvedValue(null);

    await expect(
      service.create('founder-1', {
        ...createDto,
        startupId: 'startup-owned-by-founder-2',
      }),
    ).rejects.toBeInstanceOf(NotFoundException);

    expect(startupFindFirst).toHaveBeenCalledWith({
      where: {
        id: 'startup-owned-by-founder-2',
        founderId: 'founder-1',
      },

      select: {
        id: true,
      },
    });

    expect(advisorFindFirst).not.toHaveBeenCalled();
    expect(requestCreate).not.toHaveBeenCalled();
  });

  it('rejects a duplicate open consultation', async () => {
    startupFindFirst.mockResolvedValue({
      id: 'startup-1',
    });

    advisorFindFirst.mockResolvedValue({
      id: 'advisor-1',
    });

    requestFindFirst.mockResolvedValue({
      id: 'existing-request',
      status: ConsultationStatus.NEW,
    });

    await expect(service.create('founder-1', createDto)).rejects.toBeInstanceOf(
      ConflictException,
    );

    expect(requestFindFirst).toHaveBeenCalledWith({
      where: {
        founderId: 'founder-1',

        advisorId: 'advisor-1',

        startupId: 'startup-1',

        status: {
          in: [
            ConsultationStatus.NEW,
            ConsultationStatus.CONTACTED,
            ConsultationStatus.SCHEDULED,
          ],
        },
      },

      select: {
        id: true,
        status: true,
      },
    });

    expect(requestCreate).not.toHaveBeenCalled();
  });

  it('returns the persisted consultation status to the owning founder', async () => {
    requestFindMany.mockResolvedValue([
      {
        id: 'request-1',
        advisorId: 'advisor-1',
        startupId: 'startup-1',
        message: 'Need support',
        status: ConsultationStatus.SCHEDULED,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const result = await service.findMine('founder-1');

    expect(requestFindMany).toHaveBeenCalledWith({
      where: {
        founderId: 'founder-1',
      },

      select: {
        id: true,
        advisorId: true,
        startupId: true,
        message: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });

    expect(result).toHaveLength(1);
    expect(result[0].status).toBe(ConsultationStatus.SCHEDULED);
  });

  it('allows admin workflow to update consultation status', async () => {
    requestFindUnique.mockResolvedValue({
      id: 'request-1',
    });

    requestUpdate.mockResolvedValue({
      id: 'request-1',

      founderId: 'founder-1',

      advisorId: 'advisor-1',

      startupId: 'startup-1',

      message: 'Need support',

      status: ConsultationStatus.SCHEDULED,

      adminNotes: null,

      createdAt: new Date(),

      updatedAt: new Date(),
    });

    const result = await service.updateStatus('request-1', {
      status: ConsultationStatus.SCHEDULED,
    });

    expect(requestUpdate).toHaveBeenCalledWith(
      expect.objectContaining({
        where: {
          id: 'request-1',
        },

        data: {
          status: ConsultationStatus.SCHEDULED,
        },
      }),
    );

    expect(result.status).toBe(ConsultationStatus.SCHEDULED);
  });
});
