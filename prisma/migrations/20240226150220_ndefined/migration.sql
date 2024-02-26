/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Billboard` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Billboard` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Store` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Store` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Billboard" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Store" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AddForeignKey
ALTER TABLE "Billboard" ADD CONSTRAINT "Billboard_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
