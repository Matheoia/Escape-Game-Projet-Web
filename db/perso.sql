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
-- Table structure for table `perso`
--

CREATE TABLE `perso` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nom` text NOT NULL,
  `sexe` text NOT NULL,
  `espece` text NOT NULL,
  `poids` text NOT NULL,
  `sang` text NOT NULL,
  `objet` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `perso`
--

INSERT INTO `perso` (`id`, `nom`, `sexe`, `espece`, `poids`, `sang`, `objet`, `description`) VALUES
(1, 'Mario', 'homme', 'humain', 'moyen', 'A-', 'Mario', 'mon pitch'),
(2, 'Luigi', 'homme', 'humain', 'moyen', 'B+', 'Luigi', 'mon aspirateur'),
(3, 'Peach', 'femme', 'humain', 'moyen', 'A-', 'Peach', 'ma couronne'),
(4, 'Daisy', 'femme', 'humain', 'moyen', 'B+', 'Daisy', 'ma couronne'),
(5, 'Harmonie', 'femme', 'humain', 'lourd', 'O', 'Harmonie', 'Luma'),
(6, 'Metal_Mario', 'homme', 'humain', 'lourd', 'A+', 'Cerveau', 'la raison'),
(7, 'Yoshi', 'homme', 'autre', 'moyen', 'B-', 'Yoshi', 'mon oeuf'),
(8, 'Toad', 'homme', 'autre', 'leger', 'A+', 'Toad', 'mon chapeau'),
(9, 'Koopa', 'homme', 'autre', 'leger', 'B-', 'Koopa', 'ma carapace'),
(10, 'Maskas', 'homme', 'autre', 'leger', 'A-', 'Maskas', 'mon masque'),
(11, 'Lakitu', 'homme', 'autre', 'leger', 'O', 'Lakitu', 'mon nuage'),
(12, 'Toadette', 'femme', 'autre', 'leger', 'O', 'Cerveau', 'la raison'),
(13, 'Bebe_Mario', 'homme', 'humain', 'leger', 'O', 'Bebe_Mario', 'ma tétine'),
(14, 'Bebe_Luigi', 'homme', 'humain', 'leger', 'A-', 'Bebe_Luigi', 'ma tétine'),
(15, 'Bebe_Peach', 'femme', 'humain', 'leger', 'B+', 'Bebe_Peach', 'ma tétine'),
(16, 'Bebe_Daisy', 'femme', 'humain', 'leger', 'A+', 'Bebe_Daisy', 'ma tétine'),
(17, 'Bebe_Harmonie', 'femme', 'humain', 'leger', 'B-', 'Bebe_Harmonie', 'ma tétine'),
(18, 'Peach_Rose', 'femme', 'humain', 'lourd', 'A+', 'Cerveau', 'la raison'),
(19, 'Bowser', 'homme', 'autre', 'lourd', 'A+', 'Mario', 'mon pitch'),
(20, 'Donkey_Kong', 'homme', 'autre', 'lourd', 'O', 'Donkey_Kong', 'ma banane'),
(21, 'Wario', 'homme', 'humain', 'lourd', 'B-', 'Wario', 'ma moto'),
(22, 'Waluigi', 'homme', 'humain', 'lourd', 'A-', 'Waluigi', 'ma casquette'),
(23, 'Iggy', 'homme', 'autre', 'moyen', 'B+', 'BowserJr', 'mon bolide'),
(24, 'Roy', 'homme', 'autre', 'lourd', 'B-', 'BowserJr', 'mon bolide'),
(25, 'Lemmy', 'homme', 'autre', 'leger', 'B-', 'BowserJr', 'mon bolide'),
(26, 'Larry', 'homme', 'autre', 'leger', 'A+', 'BowserJr', 'mon bolide'),
(27, 'Wendy', 'femme', 'autre', 'lger', 'A+', 'BowserJr', 'mon bolide'),
(28, 'Ludwig', 'homme', 'autre', 'moyen', 'O', 'BowserJr', 'mon bolide'),
(29, 'Morton', 'homme', 'autre', 'lourd', 'A-', 'BowserJr', 'mon bolide'),
(30, 'Bowser_Skelet', 'homme', 'autre', 'lourd', 'O', 'Cerveau', 'la raison'),
(31, 'Mario_Tanuki', 'homme', 'humain', 'moyen', 'O', 'Mario_Tanuki', 'mon déguisement'),
(32, 'Peach_Chat', 'femme', 'humain', 'moyen', 'A-', 'Peach_Chat', 'mon déguisement'),
(33, 'Link', 'homme', 'humain', 'lourd', 'A+', 'Link', 'mon épée'),
(34, 'Villageois', 'homme', 'humain', 'moyen', 'A+', 'Villageois', 'ma hache'),
(35, 'Villageoise', 'femme', 'humain', 'moyen', 'O', 'Villageois', 'ma hache'),
(36, 'Marie', 'femme', 'autre', 'leger', 'B+', 'Marie', 'mon marteau');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `perso`
--
ALTER TABLE `perso`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `perso`
--
ALTER TABLE `perso`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
