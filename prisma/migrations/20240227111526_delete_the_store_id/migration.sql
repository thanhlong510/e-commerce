/*
  Warnings:

  - You are about to drop the column `storeId` on the `Billboard` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Billboard_storeId_idx";

-- AlterTable
ALTER TABLE "Billboard" DROP COLUMN "storeId";
