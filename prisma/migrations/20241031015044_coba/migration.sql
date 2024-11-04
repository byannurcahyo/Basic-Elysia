/*
  Warnings:

  - A unique constraint covering the columns `[face]` on the table `detectionLogs` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[picture_full]` on the table `faces` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[picture_single]` on the table `faces` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `detectionLogs_face_key` ON `detectionLogs`(`face`);

-- CreateIndex
CREATE UNIQUE INDEX `faces_picture_full_key` ON `faces`(`picture_full`);

-- CreateIndex
CREATE UNIQUE INDEX `faces_picture_single_key` ON `faces`(`picture_single`);

-- AddForeignKey
ALTER TABLE `detectionLogs` ADD CONSTRAINT `detectionLogs_face_fkey` FOREIGN KEY (`face`) REFERENCES `faces`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `faces` ADD CONSTRAINT `faces_picture_full_fkey` FOREIGN KEY (`picture_full`) REFERENCES `capturedPictures`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `faces` ADD CONSTRAINT `faces_picture_single_fkey` FOREIGN KEY (`picture_single`) REFERENCES `capturedPictures`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `capturedPictures` ADD CONSTRAINT `capturedPictures_id_fkey` FOREIGN KEY (`id`) REFERENCES `galleryItems`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `capturedVideos` ADD CONSTRAINT `capturedVideos_id_fkey` FOREIGN KEY (`id`) REFERENCES `galleryItems`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
