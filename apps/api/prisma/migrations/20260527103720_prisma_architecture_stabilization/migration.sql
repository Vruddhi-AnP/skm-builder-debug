/*
  Warnings:

  - Added the required column `updatedAt` to the `Builder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Startup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `role` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('founder', 'builder', 'investor', 'advisor', 'admin');

-- AlterTable
ALTER TABLE "Builder" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Startup" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL;

-- CreateIndex
CREATE INDEX "Builder_startupId_idx" ON "Builder"("startupId");

-- CreateIndex
CREATE INDEX "Startup_founderId_idx" ON "Startup"("founderId");

-- AddForeignKey
ALTER TABLE "Builder" ADD CONSTRAINT "Builder_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
