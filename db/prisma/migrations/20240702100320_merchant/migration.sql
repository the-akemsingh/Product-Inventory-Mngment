/*
  Warnings:

  - You are about to drop the column `description` on the `Merchant` table. All the data in the column will be lost.
  - You are about to drop the column `logo` on the `Merchant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Merchant" DROP COLUMN "description",
DROP COLUMN "logo";
