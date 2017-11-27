-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: custommentor-db.ctqtl9iwo8il.us-east-2.rds.amazonaws.com:3306
-- Generation Time: Oct 19, 2017 at 07:58 PM
-- Server version: 5.6.35
-- PHP Version: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `custommentor`
--

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
(4, 3, 'a:2:{i:0;s:11:"educational";i:1;s:8:"physical";}', 'asdasd', 'cheerleader', 'twice', 'a:1:{i:0;s:5:"email";}', 'a:1:{s:6:"friday";a:0:{}}', 'asd', 'asd', 'asd', 'HSGrade', NULL, 'asd');

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
(3, 'TestingAWS', 'TestingAWS@testing.com', '$2y$10$c8HJoAUkiSGAKAPH1nxl7.eTnHv88mDysX12M5J9OcPx2M.OoFwbq', 'Mentee', '123123');

--
-- Indexes for dumped tables
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `content` text NOT NULL,
  `author_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id` (`author_id`),
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3,
  CONSTRAINT `blogs_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;


INSERT INTO `blogs` VALUES ('test title', '2017-11-27 14:50:30', 'this is the content', 1);
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
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `profile_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `profile`
--
ALTER TABLE `profile`
  ADD CONSTRAINT `profile_ibfk_1` FOREIGN KEY (`fk_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
