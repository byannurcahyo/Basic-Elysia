/*
  Warnings:

  - Added the required column `bounding_box` to the `faces` table without a default value. This is not possible if the table is not empty.
  - Added the required column `landmarks` to the `faces` table without a default value. This is not possible if the table is not empty.
  - Added the required column `picture_full` to the `faces` table without a default value. This is not possible if the table is not empty.
  - Added the required column `picture_single` to the `faces` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `identities` table without a default value. This is not possible if the table is not empty.
  - Made the column `content` on table `posts` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `faces` ADD COLUMN `bounding_box` LONGBLOB NOT NULL,
    ADD COLUMN `landmarks` LONGBLOB NOT NULL,
    ADD COLUMN `picture_full` INTEGER NOT NULL,
    ADD COLUMN `picture_single` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `identities` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `posts` MODIFY `content` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `systemLogs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `message` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `detectionLogs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `face` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `capturedPictures` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `img_path` VARCHAR(191) NOT NULL,
    `width` INTEGER NOT NULL,
    `height` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `capturedVideos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `video_path` VARCHAR(191) NOT NULL,
    `width` INTEGER NOT NULL,
    `height` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `galleryItems` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `item` INTEGER NOT NULL,
    `capture_method` ENUM('AUTO', 'MANUAL') NOT NULL DEFAULT 'AUTO',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
