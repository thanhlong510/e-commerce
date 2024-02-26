-- DropForeignKey
ALTER TABLE "Billboard" DROP CONSTRAINT "Billboard_storeId_fkey";

-- AlterTable
ALTER TABLE "Store" ALTER COLUMN "name" DROP NOT NULL;
