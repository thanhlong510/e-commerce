-- AlterTable
ALTER TABLE "File" ADD COLUMN     "fileName" TEXT,
ALTER COLUMN "url" DROP NOT NULL;
