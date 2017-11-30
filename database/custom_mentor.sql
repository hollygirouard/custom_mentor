-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2017 at 10:53 AM
-- Server version: 5.7.14
-- PHP Version: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `custom_mentor`
--

-- --------------------------------------------------------

--
-- Table structure for table `avalability`
--

CREATE TABLE `avalability` (
  `id` int(11) NOT NULL,
  `user_fk` int(11) NOT NULL,
  `av_day` varchar(255) NOT NULL,
  `av_time` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `avalability`
--

INSERT INTO `avalability` (`id`, `user_fk`, `av_day`, `av_time`) VALUES
(15, 2, 'monday', ''),
(16, 2, 'tuesday', ''),
(24, 1, 'monday', '03:02 - 02:02');

-- --------------------------------------------------------

--
-- Table structure for table `contact_method`
--

CREATE TABLE `contact_method` (
  `id` int(11) NOT NULL,
  `user_fk` int(11) NOT NULL,
  `contact_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact_method`
--

INSERT INTO `contact_method` (`id`, `user_fk`, `contact_type`) VALUES
(21, 1, 'email'),
(22, 1, 'phone'),
(23, 2, 'email'),
(24, 2, 'phone');

-- --------------------------------------------------------

--
-- Table structure for table `goals`
--

CREATE TABLE `goals` (
  `id` int(11) NOT NULL,
  `user_fk` int(11) NOT NULL,
  `goals` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `goals`
--

INSERT INTO `goals` (`id`, `user_fk`, `goals`) VALUES
(21, 1, 'educational'),
(22, 1, 'financial'),
(23, 1, 'physical'),
(24, 2, 'physical'),
(25, 2, 'spiritual');

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `profile_id` int(11) NOT NULL,
  `user_fk` int(11) NOT NULL,
  `service` varchar(255) DEFAULT NULL,
  `mentoring_level` varchar(255) DEFAULT NULL,
  `weektalk` varchar(255) DEFAULT NULL,
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

INSERT INTO `profile` (`profile_id`, `user_fk`, `service`, `mentoring_level`, `weektalk`, `areaofexp`, `experience`, `fieldofstudy`, `education`, `managementool`, `addition_degrees`) VALUES
(5, 2, NULL, 'cheerleader', NULL, NULL, NULL, NULL, 'PHD', NULL, NULL),
(6, 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, 6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(52, 1, 'asd', 'cheerleader', 'twice', '', '', '', 'PHD', NULL, '');

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
(1, 'demo', 'demo@demo.com', '$2y$10$7/c79SOsg6OoDtDY5j710uulAZQADsoJwDwZ7VvnheBt8iYCEJ4hS', 'Mentor', '123123'),
(2, 'demo2', 'demo2@demo.com', '$2y$10$1.aD/ecWVWBTO2JV0bb9i.r8zkvUViq0AWW83SqE32lITJjs5H9qi', 'Mentor', '123123'),
(3, 'TestingAWS', 'TestingAWS@testing.com', '$2y$10$c8HJoAUkiSGAKAPH1nxl7.eTnHv88mDysX12M5J9OcPx2M.OoFwbq', 'Mentee', '123123'),
(4, 'Austin T Edwards', 'AustinTedwards@gmail.com', '$2y$10$eWnMPlNCFHbnqqrQOc22F.haj1ZImVMXmI598ssKTgNbblDMTCGj6', 'Mentee', '9134816948'),
(5, 'testing', 'tester@gmail.com', '$2y$10$QqUcq8gt39QG2evKJM53JOlb74MxzURnQDBoabwA8MzcQZuVrDDwe', 'Mentee', '3035555555'),
(6, 'Test', 'Test@Test', '$2y$10$hGioHWRqY5aETIbfdQu0YeCDgm0uWQfR3lrpbQjdc0PfOjkMjk12W', 'Mentee', '123123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `avalability`
--
ALTER TABLE `avalability`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_fk` (`user_fk`);

--
-- Indexes for table `contact_method`
--
ALTER TABLE `contact_method`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_fk` (`user_fk`);

--
-- Indexes for table `goals`
--
ALTER TABLE `goals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_fk` (`user_fk`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`profile_id`),
  ADD KEY `fk_id` (`user_fk`),
  ADD KEY `user_fk` (`user_fk`),
  ADD KEY `user_fk_2` (`user_fk`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `avalability`
--
ALTER TABLE `avalability`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT for table `contact_method`
--
ALTER TABLE `contact_method`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT for table `goals`
--
ALTER TABLE `goals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `profile_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `avalability`
--
ALTER TABLE `avalability`
  ADD CONSTRAINT `avalability_ibfk_1` FOREIGN KEY (`user_fk`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `contact_method`
--
ALTER TABLE `contact_method`
  ADD CONSTRAINT `contact_method_ibfk_1` FOREIGN KEY (`user_fk`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `goals`
--
ALTER TABLE `goals`
  ADD CONSTRAINT `goals_ibfk_1` FOREIGN KEY (`user_fk`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `profile`
--
ALTER TABLE `profile`
  ADD CONSTRAINT `profile_ibfk_1` FOREIGN KEY (`user_fk`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
