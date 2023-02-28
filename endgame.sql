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
-- Table structure for table `endgame`
--

CREATE TABLE `endgame` (
  `idD` bigint(20) UNSIGNED NOT NULL,
  `id` int(11) NOT NULL,
  `page` text NOT NULL,
  `texte` text NOT NULL,
  `reponse` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `endgame`
--

INSERT INTO `endgame` (`idD`, `id`, `page`, `texte`, `reponse`) VALUES
(1, 1, 'intro', '\"Hahahaha! Tu m\'as enfin rattrapé. Mais serais-tu capable de relever mon défi pour retrouver ton objet?\"', ''),
(2, 2, '2', '\"Tente de répondre à ces énigmes!<br>Qu\'est-ce qui est jaune et qui attend?\" <form id=\"formRep\">\n    <input id=\"inputRep\" type=\"text\">\n    <input id=\"btnRep\" type=\"submit\">\n</form>', 'JONATHAN'),
(3, 3, '3', '\"Bien joué, maintenant tente de résoudre ça!<br> La poule ou l\'oeuf avant?\" <form id=\"formRep\">\n    <input id=\"inputRep\" type=\"text\">\n    <input id=\"btnRep\" type=\"submit\">\n</form>', 'LA POULE'),
(4, 4, '4', '\"Félicitation, tu es parvenu jusqu\'à là, voici l\'ultime défi! <br>Pourquoi la feuille se noie à la piscine?(réponse en 1 mot)\" <form id=\"formRep\">\n    <input id=\"inputRep\" type=\"text\">\n    <input id=\"btnRep\" type=\"submit\">\n</form>', 'PAPIER'),
(5, 5, '5', '\"C\'est un sans faute ! Mais rappelle-moi, quel est mon nom? \"<form id=\"formRep\">\n    <input id=\"inputRep\" type=\"text\">\n    <input id=\"btnRep\" type=\"submit\">\n</form>', ''),
(6, 100, '100', '\"Hehe, tu le savais depuis le début n\'est-ce pas? \"<p>\n    <button class=\'btn\' id=\"rep1\">Pourquoi m\'avoir fait ça?</button>\n</p> <p>\n    <button class=\'btn\' id=\"rep2\">Tu paraissais trop suspect</button>\n</p> ', ''),
(7, 101, '101', '\"Hahaha, tu veux savoir pourquoi j\'ai fait ça ? \"<p>\n    <button class=\'btn\' id=\"rep1\">Je pense avoir une idée</button>\n</p> <p>\n    <button class=\'btn\' id=\"rep2\">Je ne comprend pas</button>\n</p> ', ''),
(8, 102, '102', '\"Depuis toujours j\'ai voulu visité les chateaux de France avec toi mais tu étais tout le temps obnubilé par ton objet...\" <p>\n    <button class=\'btn\' id=\"rep1\">Désolé...</button>\n</p> <p>\n    <button class=\'btn\' id=\"rep2\">Juste pour ça! Il suffisait de me le dire</button>\n</p> ', ''),
(9, 103, '103', '\"Tu ne m\'en veux pas trop j\'espère...\" <p>\n    <button class=\'btn\' id=\"rep1\">Mais non, c\'était fun</button>\n</p> <p>\n    <button class=\'btn\' id=\"rep2\">Si je t\'en veux, pour la peine offre moi le dîner</button>\n</p> ', ''),
(10, 200, 'happyEnd', '\"Hahahaha, content que ça t\'ait plu, voici ton objet, il était sur moi depuis le début.\"', ''),
(11, 201, 'sadEnd', '\"Hahahaha, avec plaisir! D\'ailleurs, voici ton objet, il était sur moi depuis le début.\"', ''),
(404, 404, 'fail', 'Es-tu vraiment sûr... ?', ''),
(405, 405, 'reintro', 'Es-tu prêt à relever le défi à nouveau?', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `endgame`
--
ALTER TABLE `endgame`
  ADD UNIQUE KEY `idD` (`idD`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `endgame`
--
ALTER TABLE `endgame`
  MODIFY `idD` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=406;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
