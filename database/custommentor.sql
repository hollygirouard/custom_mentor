-- phpMyAdmin SQL Dump
-- version 4.7.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 27, 2017 at 11:24 PM
-- Server version: 5.6.35
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `custom_mentor`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `content` text NOT NULL,
  `author_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `date`, `content`, `author_id`) VALUES
(1, 'test title', '2017-11-27 14:50:30', 'this is the content', 1);

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `profile_id` int(11) NOT NULL,
  `fk_id` int(11) NOT NULL,
  `goals` varchar(255) DEFAULT NULL,
  `service` varchar(255) DEFAULT NULL,
  `mentoring_level` varchar(255) DEFAULT NULL,
  `weektalk` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `avialability` varchar(255) DEFAULT NULL,
  `areaofexp` varchar(255) DEFAULT NULL,
  `experience` varchar(255) DEFAULT NULL,
  `fieldofstudy` varchar(255) DEFAULT NULL,
  `education` varchar(255) DEFAULT NULL,
  `managementool` varchar(255) DEFAULT NULL,
  `addition_degrees` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`profile_id`, `fk_id`, `goals`, `service`, `mentoring_level`, `weektalk`, `contact`, `avialability`, `areaofexp`, `experience`, `fieldofstudy`, `education`, `managementool`, `addition_degrees`) VALUES
(1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 3, 'a:2:{i:0;s:11:\"educational\";i:1;s:8:\"physical\";}', 'asdasd', 'cheerleader', 'twice', 'a:1:{i:0;s:5:\"email\";}', 'a:1:{s:6:\"friday\";a:0:{}}', 'asd', 'asd', 'asd', 'HSGrade', NULL, 'asd'),
(5, 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `type`, `phone`) VALUES
(1, 'demo', 'demo@demo.com', '$2y$10$7/c79SOsg6OoDtDY5j710uulAZQADsoJwDwZ7VvnheBt8iYCEJ4hS', 'Mentee', '123123'),
(2, 'demo2', 'demo2@demo.com', '$2y$10$1.aD/ecWVWBTO2JV0bb9i.r8zkvUViq0AWW83SqE32lITJjs5H9qi', 'Mentee', '123123'),
(3, 'TestingAWS', 'TestingAWS@testing.com', '$2y$10$c8HJoAUkiSGAKAPH1nxl7.eTnHv88mDysX12M5J9OcPx2M.OoFwbq', 'Mentee', '123123'),
(4, 'test', 'test@test.test', '$2y$10$wArsHlt/O58s0TGCuhk5leyilFAMHQqtsHJ1nAdFP06aYj1zNygpC', 'Mentee', '333');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id` (`author_id`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`profile_id`),
  ADD KEY `fk_id` (`fk_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `profile_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `blogs`
--
ALTER TABLE `blogs`
  ADD CONSTRAINT `blogs_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `profile`
--
ALTER TABLE `profile`
  ADD CONSTRAINT `profile_ibfk_1` FOREIGN KEY (`fk_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
