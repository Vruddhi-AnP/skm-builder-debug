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
    return this.prisma.consultationRequest.findMany({
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

      orderBy: {
        createdAt: 'desc',
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
