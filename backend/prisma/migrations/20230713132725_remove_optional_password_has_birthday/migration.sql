/*
  Warnings:

  - Made the column `birthday` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `passwordHash` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "birthday" SET NOT NULL,
ALTER COLUMN "passwordHash" SET NOT NULL;
