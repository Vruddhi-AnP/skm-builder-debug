import { NotFoundException } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { BuilderService } from './builder.service';
import { CreateBuilderDto } from './dto/create-builder.dto';
import { UpdateBuilderDto } from './dto/update-builder.dto';

describe('BuilderService founder isolation', () => {
  const startupFindFirst = jest.fn();
  const builderUpsert = jest.fn();
  const builderFindUnique = jest.fn();
  const builderUpdate = jest.fn();

  const prisma = {
    startup: {
      findFirst: startupFindFirst,
    },

    builder: {
      upsert: builderUpsert,
      findUnique: builderFindUnique,
      update: builderUpdate,
    },
  } as unknown as PrismaService;

  let service: BuilderService;

  beforeEach(() => {
    jest.clearAllMocks();

    service = new BuilderService(prisma);
  });

  it('blocks saving Builder data for a startup owned by another founder', async () => {
    startupFindFirst.mockResolvedValue(null);

    const dto = {
      startupId: 'startup-owned-by-founder-2',
      data: {
        ideaDefinition: {
          idea: 'Private founder draft',
        },
      },
    } as unknown as CreateBuilderDto;

    await expect(service.saveBuilder(dto, 'founder-1')).rejects.toBeInstanceOf(
      NotFoundException,
    );

    expect(startupFindFirst).toHaveBeenCalledWith({
      where: {
        id: 'startup-owned-by-founder-2',
        founderId: 'founder-1',
      },
    });

    expect(builderUpsert).not.toHaveBeenCalled();
  });

  it('blocks reading another founder Builder workspace', async () => {
    startupFindFirst.mockResolvedValue(null);

    await expect(
      service.findBuilderByStartup('startup-owned-by-founder-2', 'founder-1'),
    ).rejects.toBeInstanceOf(NotFoundException);

    expect(startupFindFirst).toHaveBeenCalledWith({
      where: {
        id: 'startup-owned-by-founder-2',
        founderId: 'founder-1',
      },
    });

    expect(builderFindUnique).not.toHaveBeenCalled();
  });

  it('blocks updating another founder Builder workspace', async () => {
    startupFindFirst.mockResolvedValue(null);

    const dto = {
      data: {
        problemDefinition: {
          problem: 'Private founder problem',
        },
      },
    } as unknown as UpdateBuilderDto;

    await expect(
      service.updateBuilder('startup-owned-by-founder-2', dto, 'founder-1'),
    ).rejects.toBeInstanceOf(NotFoundException);

    expect(startupFindFirst).toHaveBeenCalledWith({
      where: {
        id: 'startup-owned-by-founder-2',
        founderId: 'founder-1',
      },
    });

    expect(builderFindUnique).not.toHaveBeenCalled();
    expect(builderUpdate).not.toHaveBeenCalled();
  });
});
