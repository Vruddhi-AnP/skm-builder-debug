import { NotFoundException } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { StartupService } from './startup.service';

describe('StartupService ownership', () => {
  const startupFindFirst = jest.fn();

  const prisma = {
    startup: {
      findFirst: startupFindFirst,
    },
  } as unknown as PrismaService;

  let service: StartupService;

  beforeEach(() => {
    jest.clearAllMocks();

    service = new StartupService(prisma);
  });

  it('prevents a founder from accessing another founder startup', async () => {
    startupFindFirst.mockResolvedValue(null);

    await expect(
      service.findOneByFounder('startup-owned-by-someone-else', 'founder-a'),
    ).rejects.toBeInstanceOf(NotFoundException);

    expect(startupFindFirst).toHaveBeenCalledWith({
      where: {
        id: 'startup-owned-by-someone-else',
        founderId: 'founder-a',
      },
    });
  });
});
