/*
  Warnings:

  - You are about to alter the column `options` on the `problems` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.
  - Added the required column `right_options` to the `Problems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `problems` ADD COLUMN `right_options` JSON NOT NULL,
    MODIFY `options` JSON NOT NULL;
