/*
  Warnings:

  - A unique constraint covering the columns `[galleryItemId]` on the table `capturedPictures` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[galleryItemId]` on the table `capturedVideos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `galleryItemId` to the `capturedPictures` table without a default value. This is not possible if the table is not empty.
  - Added the required column `galleryItemId` to the `capturedVideos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `capturedpictures` DROP FOREIGN KEY `capturedPictures_id_fkey`;

-- DropForeignKey
ALTER TABLE `capturedvideos` DROP FOREIGN KEY `capturedVideos_id_fkey`;

-- AlterTable
ALTER TABLE `capturedpictures` ADD COLUMN `galleryItemId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `capturedvideos` ADD COLUMN `galleryItemId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `capturedPictures_galleryItemId_key` ON `capturedPictures`(`galleryItemId`);

-- CreateIndex
CREATE UNIQUE INDEX `capturedVideos_galleryItemId_key` ON `capturedVideos`(`galleryItemId`);

-- AddForeignKey
ALTER TABLE `capturedPictures` ADD CONSTRAINT `capturedPictures_galleryItemId_fkey` FOREIGN KEY (`galleryItemId`) REFERENCES `galleryItems`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `capturedVideos` ADD CONSTRAINT `capturedVideos_galleryItemId_fkey` FOREIGN KEY (`galleryItemId`) REFERENCES `galleryItems`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
