import { AccountStatus, VisibilityStatus } from '@prisma/client';

import { PrismaService } from '../../prisma/prisma.service';

import { AdvisorService } from './advisor.service';

describe('AdvisorService public discovery', () => {
  const advisorFindMany = jest.fn();

  const prisma = {
    advisorProfile: {
      findMany: advisorFindMany,
    },
  } as unknown as PrismaService;

  let service: AdvisorService;

  beforeEach(() => {
    jest.clearAllMocks();

    service = new AdvisorService(prisma);
  });

  it('excludes phone and email from the public advisor DTO', async () => {
    advisorFindMany.mockResolvedValue([
      {
        id: 'advisor-1',

        currentRole: 'Product Leader',

        organization: 'Example Company',

        experienceLevel: null,

        expertiseArea: 'Product Strategy',

        industry: 'SaaS',

        startupStage: null,

        mentorshipType: null,

        keySkills: 'MVP,Go-to-market',

        advisoryGoal: 'Help founders execute',

        weeklyAvailability: null,

        preferredTimeSlot: null,

        sessionMode: null,

        preferredTimezone: null,

        languages: 'English,Hindi',

        founderEngagementPreference: null,

        advisoryPricingModel: null,

        consultationType: null,

        phoneNumber: '9999999999',

        linkedinUrl: 'https://example.com/private',

        user: {
          name: 'Test Advisor',

          email: 'private@example.com',
        },
      },
    ]);

    const result = await service.discover();

    expect(result).toHaveLength(1);

    expect(result[0]).toMatchObject({
      id: 'advisor-1',
      fullName: 'Test Advisor',
    });

    expect(result[0]).not.toHaveProperty('phoneNumber');

    expect(result[0]).not.toHaveProperty('email');

    expect(result[0]).not.toHaveProperty('linkedinUrl');

    expect(result[0]).not.toHaveProperty('user');
  });

  it('does not include pending advisors in discovery', async () => {
    advisorFindMany.mockResolvedValue([]);

    const result = await service.discover();

    expect(result).toEqual([]);

    expect(advisorFindMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: {
          accountStatus: AccountStatus.APPROVED,

          visibilityStatus: VisibilityStatus.PUBLISHED,
        },
      }),
    );
  });
});

describe('AdvisorService account isolation', () => {
  const advisorFindUnique = jest.fn();
  const advisorUpdate = jest.fn();

  const prisma = {
    advisorProfile: {
      findUnique: advisorFindUnique,
      update: advisorUpdate,
    },
  } as unknown as PrismaService;

  let service: AdvisorService;

  beforeEach(() => {
    jest.clearAllMocks();

    service = new AdvisorService(prisma);
  });

  it('scopes profile reads to the authenticated advisor user', async () => {
    advisorFindUnique.mockResolvedValue(null);

    await expect(service.getProfile('advisor-user-2')).rejects.toThrow(
      'Advisor profile not found.',
    );

    expect(advisorFindUnique).toHaveBeenCalledWith({
      where: {
        userId: 'advisor-user-2',
      },
    });
  });

  it('updates only the profile belonging to the authenticated advisor user', async () => {
    advisorFindUnique.mockResolvedValue({
      id: 'advisor-profile-2',
      userId: 'advisor-user-2',
    });

    advisorUpdate.mockResolvedValue({
      id: 'advisor-profile-2',
      userId: 'advisor-user-2',
      organization: 'Advisor Two Organisation',
    });

    const result = await service.updateProfile('advisor-user-2', {
      organization: 'Advisor Two Organisation',
    });

    expect(advisorFindUnique).toHaveBeenCalledWith({
      where: {
        userId: 'advisor-user-2',
      },
    });

    expect(advisorUpdate).toHaveBeenCalledWith({
      where: {
        userId: 'advisor-user-2',
      },

      data: {
        organization: 'Advisor Two Organisation',
      },
    });

    expect(result).toMatchObject({
      userId: 'advisor-user-2',
      organization: 'Advisor Two Organisation',
    });
  });
});
