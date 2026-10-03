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
