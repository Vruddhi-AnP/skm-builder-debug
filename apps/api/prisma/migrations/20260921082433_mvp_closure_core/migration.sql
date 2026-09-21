-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "ConsultationStatus" AS ENUM ('NEW', 'CONTACTED', 'SCHEDULED', 'CLOSED', 'REJECTED');

-- CreateEnum
CREATE TYPE "VisibilityStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'HIDDEN');

-- AlterTable
ALTER TABLE "AdvisorProfile" ADD COLUMN     "accountStatus" "AccountStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "planCode" TEXT,
ADD COLUMN     "visibilityStatus" "VisibilityStatus" NOT NULL DEFAULT 'DRAFT';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "accountStatus" "AccountStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "termsAccepted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "termsAcceptedAt" TIMESTAMP(3),
ADD COLUMN     "termsVersion" TEXT;

-- CreateTable
CREATE TABLE "ReadinessAssessment" (
    "id" TEXT NOT NULL,
    "startupId" TEXT NOT NULL,
    "overallScore" INTEGER NOT NULL,
    "scoreBand" TEXT NOT NULL,
    "parameterScores" JSONB NOT NULL,
    "suggestions" JSONB NOT NULL,
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReadinessAssessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConsultationRequest" (
    "id" TEXT NOT NULL,
    "founderId" TEXT NOT NULL,
    "advisorId" TEXT NOT NULL,
    "startupId" TEXT,
    "message" TEXT,
    "status" "ConsultationStatus" NOT NULL DEFAULT 'NEW',
    "adminNotes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConsultationRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ReadinessAssessment_startupId_idx" ON "ReadinessAssessment"("startupId");

-- CreateIndex
CREATE INDEX "ConsultationRequest_founderId_idx" ON "ConsultationRequest"("founderId");

-- CreateIndex
CREATE INDEX "ConsultationRequest_advisorId_idx" ON "ConsultationRequest"("advisorId");

-- CreateIndex
CREATE INDEX "ConsultationRequest_status_idx" ON "ConsultationRequest"("status");

-- AddForeignKey
ALTER TABLE "ReadinessAssessment" ADD CONSTRAINT "ReadinessAssessment_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
