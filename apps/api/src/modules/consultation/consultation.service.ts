import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import {
  AccountStatus,
  ConsultationStatus,
  VisibilityStatus,
} from '@prisma/client';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateConsultationDto } from './dto/create-consultation.dto';

import { UpdateConsultationStatusDto } from './dto/update-consultation-status.dto';

import { UpdateConsultationAdminNotesDto } from './dto/update-consultation-admin-notes.dto';

const OPEN_CONSULTATION_STATUSES: ConsultationStatus[] = [
  ConsultationStatus.NEW,
  ConsultationStatus.CONTACTED,
  ConsultationStatus.SCHEDULED,
];

@Injectable()
export class ConsultationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(founderId: string, dto: CreateConsultationDto) {
    const startup = await this.prisma.startup.findFirst({
      where: {
        id: dto.startupId,
        founderId,
      },

      select: {
        id: true,
      },
    });

    if (!startup) {
      throw new NotFoundException('Startup not found.');
    }

    const advisor = await this.prisma.advisorProfile.findFirst({
      where: {
        id: dto.advisorId,

        accountStatus: AccountStatus.APPROVED,

        visibilityStatus: VisibilityStatus.PUBLISHED,
      },

      select: {
        id: true,
      },
    });

    if (!advisor) {
      throw new NotFoundException('Advisor not found.');
    }

    const existingOpenRequest = await this.prisma.consultationRequest.findFirst(
      {
        where: {
          founderId,

          advisorId: advisor.id,

          startupId: startup.id,

          status: {
            in: OPEN_CONSULTATION_STATUSES,
          },
        },

        select: {
          id: true,
          status: true,
        },
      },
    );

    if (existingOpenRequest) {
      throw new ConflictException(
        'An open consultation request already exists for this founder, advisor, and startup.',
      );
    }

    return this.prisma.consultationRequest.create({
      data: {
        founderId,

        advisorId: advisor.id,

        startupId: startup.id,

        message: dto.message.trim(),

        status: ConsultationStatus.NEW,
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
    });
  }

  async findMine(founderId: string) {
    return this.prisma.consultationRequest.findMany({
      where: {
        founderId,
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
  }

  async findAllForAdmin() {
    const requests = await this.prisma.consultationRequest.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    const founderIds = [
      ...new Set(requests.map((request) => request.founderId)),
    ];

    const startupIds = [
      ...new Set(
        requests
          .map((request) => request.startupId)
          .filter((startupId): startupId is string => Boolean(startupId)),
      ),
    ];

    const advisorIds = [
      ...new Set(requests.map((request) => request.advisorId)),
    ];

    const [founders, startups, advisors] = await Promise.all([
      this.prisma.user.findMany({
        where: {
          id: {
            in: founderIds,
          },
        },

        select: {
          id: true,
          name: true,
        },
      }),

      this.prisma.startup.findMany({
        where: {
          id: {
            in: startupIds,
          },
        },

        select: {
          id: true,
          name: true,
        },
      }),

      this.prisma.advisorProfile.findMany({
        where: {
          id: {
            in: advisorIds,
          },
        },

        select: {
          id: true,
          currentRole: true,
          organization: true,

          user: {
            select: {
              name: true,
            },
          },
        },
      }),
    ]);

    const founderMap = new Map(
      founders.map((founder) => [founder.id, founder]),
    );

    const startupMap = new Map(
      startups.map((startup) => [startup.id, startup]),
    );

    const advisorMap = new Map(
      advisors.map((advisor) => [advisor.id, advisor]),
    );

    return requests.map((request) => {
      const founder = founderMap.get(request.founderId);

      const startup = request.startupId
        ? startupMap.get(request.startupId)
        : undefined;

      const advisor = advisorMap.get(request.advisorId);

      return {
        id: request.id,

        founderId: request.founderId,

        advisorId: request.advisorId,

        startupId: request.startupId,

        message: request.message,

        status: request.status,

        adminNotes: request.adminNotes,

        createdAt: request.createdAt,

        updatedAt: request.updatedAt,

        founder: {
          id: request.founderId,

          name: founder?.name ?? 'Unknown Founder',
        },

        startup: request.startupId
          ? {
              id: request.startupId,

              name: startup?.name ?? 'Unknown Startup',
            }
          : null,

        advisor: {
          id: request.advisorId,

          name: advisor?.user.name ?? 'Unknown Advisor',

          currentRole: advisor?.currentRole ?? null,

          organization: advisor?.organization ?? null,
        },
      };
    });
  }

  async updateAdminNotes(
    consultationId: string,
    dto: UpdateConsultationAdminNotesDto,
  ) {
    const existing = await this.prisma.consultationRequest.findUnique({
      where: {
        id: consultationId,
      },

      select: {
        id: true,
      },
    });

    if (!existing) {
      throw new NotFoundException('Consultation request not found.');
    }

    return this.prisma.consultationRequest.update({
      where: {
        id: consultationId,
      },

      data: {
        adminNotes: dto.adminNotes.trim(),
      },

      select: {
        id: true,
        status: true,
        adminNotes: true,
        updatedAt: true,
      },
    });
  }

  async updateStatus(consultationId: string, dto: UpdateConsultationStatusDto) {
    const existing = await this.prisma.consultationRequest.findUnique({
      where: {
        id: consultationId,
      },

      select: {
        id: true,
      },
    });

    if (!existing) {
      throw new NotFoundException('Consultation request not found.');
    }

    return this.prisma.consultationRequest.update({
      where: {
        id: consultationId,
      },

      data: {
        status: dto.status,
      },

      select: {
        id: true,
        founderId: true,
        advisorId: true,
        startupId: true,
        message: true,
        status: true,
        adminNotes: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
}
