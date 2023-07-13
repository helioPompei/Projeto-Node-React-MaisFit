/*
  Warnings:

  - You are about to drop the column `created_at` on the `training_sheets` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `training_sheets` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `training_sheets` table. All the data in the column will be lost.
  - You are about to drop the column `password_hash` on the `training_sheets` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `password_hash` on the `users` table. All the data in the column will be lost.
  - Added the required column `nextTrainingSheet` to the `training_sheets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `training_sheets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `training_sheets` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('MALE', 'FEMALE', 'UNDEFINED');

-- AlterTable
ALTER TABLE "training_sheets" DROP COLUMN "created_at",
DROP COLUMN "email",
DROP COLUMN "name",
DROP COLUMN "password_hash",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "nextTrainingSheet" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "created_at",
DROP COLUMN "password_hash",
ADD COLUMN     "birthday" TIMESTAMP(3),
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "passwordHash" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "sex" "Sex" NOT NULL DEFAULT 'UNDEFINED';

-- CreateTable
CREATE TABLE "physical_evaluations" (
    "id" TEXT NOT NULL,
    "evaluationDate" TIMESTAMP(3) NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "imc" DOUBLE PRECISION NOT NULL,
    "currentFat" DOUBLE PRECISION NOT NULL,
    "idealFat" DOUBLE PRECISION NOT NULL,
    "goal" TEXT NOT NULL,
    "observation" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "physical_evaluations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "muscle_measurements" (
    "id" TEXT NOT NULL,
    "muscleName" TEXT NOT NULL,
    "measurement" DOUBLE PRECISION NOT NULL,
    "physicalEvaluationId" TEXT NOT NULL,

    CONSTRAINT "muscle_measurements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exercices" (
    "id" TEXT NOT NULL,
    "exerciceName" TEXT NOT NULL,
    "series" INTEGER NOT NULL,
    "repetition" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "load" DOUBLE PRECISION,
    "TrainingSheetID" TEXT NOT NULL,

    CONSTRAINT "exercices_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "physical_evaluations" ADD CONSTRAINT "physical_evaluations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "muscle_measurements" ADD CONSTRAINT "muscle_measurements_physicalEvaluationId_fkey" FOREIGN KEY ("physicalEvaluationId") REFERENCES "physical_evaluations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "training_sheets" ADD CONSTRAINT "training_sheets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercices" ADD CONSTRAINT "exercices_TrainingSheetID_fkey" FOREIGN KEY ("TrainingSheetID") REFERENCES "training_sheets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
