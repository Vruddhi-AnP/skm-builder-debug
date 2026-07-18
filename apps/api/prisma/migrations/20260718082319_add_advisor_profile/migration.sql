-- CreateEnum
CREATE TYPE "ExperienceLevel" AS ENUM ('YEARS_1_TO_3', 'YEARS_3_TO_5', 'YEARS_5_TO_10', 'YEARS_10_PLUS');

-- CreateEnum
CREATE TYPE "StartupStage" AS ENUM ('IDEA_STAGE', 'MVP_STAGE', 'EARLY_REVENUE', 'SCALING_STAGE');

-- CreateEnum
CREATE TYPE "MentorshipType" AS ENUM ('ONE_TO_ONE_ADVISORY', 'GROUP_MENTORSHIP', 'EXECUTION_GUIDANCE', 'STRATEGIC_CONSULTING');

-- CreateEnum
CREATE TYPE "WeeklyAvailability" AS ENUM ('HOURS_1_TO_5', 'HOURS_5_TO_10', 'HOURS_10_TO_20', 'HOURS_20_PLUS');

-- CreateEnum
CREATE TYPE "PreferredTimeSlot" AS ENUM ('MORNING', 'AFTERNOON', 'EVENING', 'FLEXIBLE');

-- CreateEnum
CREATE TYPE "SessionMode" AS ENUM ('VIRTUAL', 'IN_PERSON', 'HYBRID');

-- CreateEnum
CREATE TYPE "PreferredTimezone" AS ENUM ('IST', 'PST', 'EST', 'GMT');

-- CreateEnum
CREATE TYPE "AdvisorPricingModel" AS ENUM ('FREE_MENTORSHIP', 'PAID_SESSIONS', 'MONTHLY_ADVISORY', 'EQUITY_BASED');

-- CreateEnum
CREATE TYPE "EquityInterest" AS ENUM ('OPEN_TO_EQUITY', 'ONLY_PAID', 'FLEXIBLE');

-- CreateTable
CREATE TABLE "AdvisorProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "currentRole" TEXT,
    "organization" TEXT,
    "linkedinUrl" TEXT,
    "experienceLevel" "ExperienceLevel",
    "expertiseArea" TEXT,
    "industry" TEXT,
    "startupStage" "StartupStage",
    "mentorshipType" "MentorshipType",
    "keySkills" TEXT,
    "advisoryGoal" TEXT,
    "weeklyAvailability" "WeeklyAvailability",
    "preferredTimeSlot" "PreferredTimeSlot",
    "sessionMode" "SessionMode",
    "preferredTimezone" "PreferredTimezone",
    "languages" TEXT,
    "founderEngagementPreference" TEXT,
    "advisoryPricingModel" "AdvisorPricingModel",
    "sessionPrice" DECIMAL(10,2),
    "monthlyRetainer" DECIMAL(10,2),
    "equityInterest" "EquityInterest",
    "consultationType" TEXT,
    "advisoryNotes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdvisorProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AdvisorProfile_userId_key" ON "AdvisorProfile"("userId");

-- AddForeignKey
ALTER TABLE "AdvisorProfile" ADD CONSTRAINT "AdvisorProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
