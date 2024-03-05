/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Billboard` table. All the data in the column will be lost.
  - Made the column `label` on table `Billboard` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Billboard" DROP COLUMN "imageUrl",
ADD COLUMN     "imageName" TEXT,
ALTER COLUMN "label" SET NOT NULL;

-- CreateIndex
CREATE INDEX "Billboard_label_idx" ON "Billboard"("label");
