-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 05, 2022 at 10:43 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `escape_game`
--

-- --------------------------------------------------------

--
-- Table structure for table `recuperable`
--

CREATE TABLE `recuperable` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `icon` text NOT NULL,
  `zoom` int(11) NOT NULL,
  `lat` double NOT NULL,
  `lng` double NOT NULL,
  `visible` tinyint(1) NOT NULL,
  `hover` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `recuperable`
--

INSERT INTO `recuperable` (`id`, `icon`, `zoom`, `lat`, `lng`, `visible`, `hover`) VALUES
(1, 'cleENSG', 16, 48.8410837, 2.5875354, 0, 'Une clé de château'),
(2, 'croixbleu', 17, 48.810165, 2.100078, 0, 'Une croix bleu ?');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recuperable`
--
ALTER TABLE `recuperable`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recuperable`
--
ALTER TABLE `recuperable`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
