/*
  Warnings:

  - You are about to drop the `knowidentitys` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `knowidentitys`;

-- CreateTable
CREATE TABLE `identities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `faces` ADD CONSTRAINT `faces_identity_fkey` FOREIGN KEY (`identity`) REFERENCES `identities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
