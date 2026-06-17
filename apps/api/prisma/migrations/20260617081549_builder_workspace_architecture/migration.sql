/*
  Warnings:

  - A unique constraint covering the columns `[startupId]` on the table `Builder` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Builder_startupId_idx";

-- CreateIndex
CREATE UNIQUE INDEX "Builder_startupId_key" ON "Builder"("startupId");
