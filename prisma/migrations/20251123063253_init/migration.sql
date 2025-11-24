-- CreateTable
CREATE TABLE `AdminUser` (
    `admin_user_id` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `role` ENUM('admin', 'super_admin') NOT NULL,
    `password_hash` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `AdminUser_email_key`(`email`),
    PRIMARY KEY (`admin_user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Candidate` (
    `candidate_id` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `gender` VARCHAR(191) NULL,
    `age` INTEGER NULL,
    `experience_salary` INTEGER NULL,
    `expected_salary` INTEGER NULL,
    `stack` VARCHAR(191) NULL,
    `id_card` VARCHAR(191) NULL,

    UNIQUE INDEX `Candidate_email_key`(`email`),
    PRIMARY KEY (`candidate_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Address` (
    `address_id` VARCHAR(191) NOT NULL,
    `candidate_id` VARCHAR(191) NOT NULL,
    `address_line1` VARCHAR(191) NOT NULL,
    `address_line2` VARCHAR(191) NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NULL,
    `postal_code` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `address_type` ENUM('primary', 'mailing', 'permanent') NOT NULL,
    `is_current` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Address_candidate_id_address_type_key`(`candidate_id`, `address_type`),
    PRIMARY KEY (`address_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CandidateStatus` (
    `candidate_status_id` VARCHAR(191) NOT NULL,
    `candidate_id` VARCHAR(191) NOT NULL,
    `status` ENUM('pending', 'pass', 'fail') NOT NULL,
    `updated_by` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`candidate_status_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StatusUpdateRequests` (
    `status_update_request_id` VARCHAR(191) NOT NULL,
    `candidate_status_id` VARCHAR(191) NOT NULL,
    `requested_status` ENUM('pending', 'accepted', 'rejected') NOT NULL,
    `request_by` VARCHAR(191) NULL,
    `approve_by` VARCHAR(191) NULL,
    `status` ENUM('pending', 'accepted', 'rejected') NOT NULL DEFAULT 'pending',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `approved_at` DATETIME(3) NULL,

    PRIMARY KEY (`status_update_request_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Document` (
    `document_id` VARCHAR(191) NOT NULL,
    `candidate_id` VARCHAR(191) NOT NULL,
    `file_url` VARCHAR(191) NOT NULL,
    `file_type` VARCHAR(191) NOT NULL,
    `doc_type` ENUM('pdf', 'png', 'jpg') NOT NULL,
    `uploaded_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Document_candidate_id_doc_type_key`(`candidate_id`, `doc_type`),
    PRIMARY KEY (`document_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Question` (
    `question_id` VARCHAR(191) NOT NULL,
    `question_text` VARCHAR(191) NOT NULL,
    `mcq` BOOLEAN NOT NULL DEFAULT true,
    `difficulty` ENUM('easy', 'medium', 'hard') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`question_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Choice` (
    `choice_id` VARCHAR(191) NOT NULL,
    `question_id` VARCHAR(191) NOT NULL,
    `choice_text` VARCHAR(191) NOT NULL,
    `is_correct` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Choice_question_id_choice_text_key`(`question_id`, `choice_text`),
    PRIMARY KEY (`choice_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Test` (
    `test_id` VARCHAR(191) NOT NULL,
    `candidate_id` VARCHAR(191) NOT NULL,
    `total_score` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `completed_at` DATETIME(3) NULL,

    PRIMARY KEY (`test_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TestQuestion` (
    `test_question_id` VARCHAR(191) NOT NULL,
    `test_id` VARCHAR(191) NOT NULL,
    `question_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `TestQuestion_test_id_question_id_key`(`test_id`, `question_id`),
    PRIMARY KEY (`test_question_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TestAnswer` (
    `test_answer_id` VARCHAR(191) NOT NULL,
    `test_id` VARCHAR(191) NOT NULL,
    `question_id` VARCHAR(191) NOT NULL,
    `selected_choice_id` VARCHAR(191) NULL,
    `is_correct` BOOLEAN NULL,

    UNIQUE INDEX `TestAnswer_test_id_question_id_key`(`test_id`, `question_id`),
    PRIMARY KEY (`test_answer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Address` ADD CONSTRAINT `Address_candidate_id_fkey` FOREIGN KEY (`candidate_id`) REFERENCES `Candidate`(`candidate_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CandidateStatus` ADD CONSTRAINT `CandidateStatus_candidate_id_fkey` FOREIGN KEY (`candidate_id`) REFERENCES `Candidate`(`candidate_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StatusUpdateRequests` ADD CONSTRAINT `StatusUpdateRequests_candidate_status_id_fkey` FOREIGN KEY (`candidate_status_id`) REFERENCES `CandidateStatus`(`candidate_status_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StatusUpdateRequests` ADD CONSTRAINT `StatusUpdateRequests_approve_by_fkey` FOREIGN KEY (`approve_by`) REFERENCES `AdminUser`(`admin_user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_candidate_id_fkey` FOREIGN KEY (`candidate_id`) REFERENCES `Candidate`(`candidate_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Choice` ADD CONSTRAINT `Choice_question_id_fkey` FOREIGN KEY (`question_id`) REFERENCES `Question`(`question_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Test` ADD CONSTRAINT `Test_candidate_id_fkey` FOREIGN KEY (`candidate_id`) REFERENCES `Candidate`(`candidate_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TestQuestion` ADD CONSTRAINT `TestQuestion_test_id_fkey` FOREIGN KEY (`test_id`) REFERENCES `Test`(`test_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TestQuestion` ADD CONSTRAINT `TestQuestion_question_id_fkey` FOREIGN KEY (`question_id`) REFERENCES `Question`(`question_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TestAnswer` ADD CONSTRAINT `TestAnswer_test_id_fkey` FOREIGN KEY (`test_id`) REFERENCES `Test`(`test_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TestAnswer` ADD CONSTRAINT `TestAnswer_question_id_fkey` FOREIGN KEY (`question_id`) REFERENCES `Question`(`question_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TestAnswer` ADD CONSTRAINT `TestAnswer_selected_choice_id_fkey` FOREIGN KEY (`selected_choice_id`) REFERENCES `Choice`(`choice_id`) ON DELETE SET NULL ON UPDATE CASCADE;
