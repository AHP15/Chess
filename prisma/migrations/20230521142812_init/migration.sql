/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `created_at` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reset_password_token` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "password" VARCHAR(255) NOT NULL,
ADD COLUMN     "reset_password_token" VARCHAR(500) NOT NULL,
ADD COLUMN     "username" VARCHAR(255);

-- CreateTable
CREATE TABLE "Friend" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Friend_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "black_player_id" INTEGER NOT NULL,
    "white_player_id" INTEGER NOT NULL,
    "winner" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Move" (
    "id" SERIAL NOT NULL,
    "gameId" INTEGER NOT NULL,
    "public_name" VARCHAR(255) NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,

    CONSTRAINT "Move_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FriendRequest" (
    "id" SERIAL NOT NULL,
    "requestedUserId" INTEGER NOT NULL,
    "sender_email" VARCHAR(255) NOT NULL,

    CONSTRAINT "FriendRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GameToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GameToUser_AB_unique" ON "_GameToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_GameToUser_B_index" ON "_GameToUser"("B");

-- AddForeignKey
ALTER TABLE "Friend" ADD CONSTRAINT "Friend_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Move" ADD CONSTRAINT "Move_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FriendRequest" ADD CONSTRAINT "FriendRequest_requestedUserId_fkey" FOREIGN KEY ("requestedUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToUser" ADD CONSTRAINT "_GameToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToUser" ADD CONSTRAINT "_GameToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
