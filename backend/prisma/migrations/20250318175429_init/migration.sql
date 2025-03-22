-- CreateEnum
CREATE TYPE "PetType" AS ENUM ('dog', 'cat');

-- CreateTable
CREATE TABLE "Pet" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "type" "PetType" NOT NULL,
    "race" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);
