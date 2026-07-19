-- CreateEnum
CREATE TYPE "InvestorType" AS ENUM ('ANGEL_INVESTOR', 'VC_FIRM', 'FAMILY_OFFICE', 'MICRO_VC', 'CORPORATE_VC');

-- CreateEnum
CREATE TYPE "InvestmentFocus" AS ENUM ('FINTECH', 'HEALTHTECH', 'SAAS', 'AI_AUTOMATION', 'CLIMATE_TECH', 'ENTERPRISE', 'CONSUMER');

-- CreateEnum
CREATE TYPE "PreferredStartupStage" AS ENUM ('IDEA_STAGE', 'MVP_READY', 'EARLY_REVENUE', 'SEED_STAGE', 'PRE_SERIES_A');

-- CreateEnum
CREATE TYPE "InvestmentTicketSize" AS ENUM ('FIVE_TO_TEN_LAKH', 'TEN_TO_TWENTY_FIVE_LAKH', 'TWENTY_FIVE_TO_FIFTY_LAKH', 'ABOVE_FIFTY_LAKH');

-- CreateEnum
CREATE TYPE "GeographyPreference" AS ENUM ('INDIA', 'GLOBAL', 'MIDDLE_EAST', 'SOUTH_EAST_ASIA');

-- CreateTable
CREATE TABLE "InvestorProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "firmName" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "linkedinUrl" TEXT NOT NULL,
    "shortBio" TEXT,
    "experienceLevel" "ExperienceLevel" NOT NULL,
    "investorType" "InvestorType" NOT NULL,
    "investmentFocus" "InvestmentFocus"[],
    "preferredStartupStages" "PreferredStartupStage"[],
    "investmentTicketSizes" "InvestmentTicketSize"[],
    "geographyPreferences" "GeographyPreference"[],
    "interestedInFounderMentorship" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InvestorProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InvestorProfile_userId_key" ON "InvestorProfile"("userId");

-- AddForeignKey
ALTER TABLE "InvestorProfile" ADD CONSTRAINT "InvestorProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
