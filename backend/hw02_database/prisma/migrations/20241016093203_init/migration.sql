-- CreateTable
CREATE TABLE `Problems` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `question_stem` VARCHAR(191) NOT NULL,
    `number_of_options` INTEGER NOT NULL,
    `options` VARCHAR(191) NOT NULL,
    `number_of_right_options` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
