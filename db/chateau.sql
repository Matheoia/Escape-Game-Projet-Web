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
-- Table structure for table `chateau`
--

CREATE TABLE `chateau` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `icon` text NOT NULL,
  `lat` double NOT NULL,
  `lng` double NOT NULL,
  `texte` text NOT NULL,
  `zoom` int(11) NOT NULL,
  `indice` text NOT NULL,
  `type` text NOT NULL,
  `reponse` text NOT NULL,
  `asuivre` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chateau`
--

INSERT INTO `chateau` (`id`, `icon`, `lat`, `lng`, `texte`, `zoom`, `indice`, `type`, `reponse`, `asuivre`) VALUES
(1, 'champsSurMarne', 48.8523813, 2.6043343, 'Le garde présent sur place vous signale qu\'il a oublié sa clé à l\'ENSG. \nCela serait appréciable si vous iriez la chercher. \n<p id=\"reponse\"></p>\n<p id=\"indice_p\">\n    <button id=\"indice\">Indice</button>\n</p> ', 13, 'Pas besoin d\'indice pourtant :)\nAller simplement à l\'école. \n', 'cle', 'cleENSG', 'A la fin de votre visite, <span id=\"meilleurAmi\"></span> de part ses contacts entend un nom de code : \"ganon\",<span id=\"indiceGanonS\"></span> qui serait apparemment à l\'origine de tout ça. Vous vous donnez d\'ailleurs rendez-vous au château de Chambord.'),
(2, 'chambord', 47.6170668, 1.5159071, 'Le garde présent est fan de logique et d\'énigme mais reste bloqué sur celle-ci... une aide lui serait bienvenue. \n<form id=\"formRep\">\n    <input id=\"inputRep\" type=\"text\">\n    <input id=\"btnRep\" type=\"submit\">\n</form>\n<img src=\'../image/enigme.png\'>\n<p id=\"reponse\"></p>\n<p id=\"indice_p\">\n    <button id=\"indice\">Indice</button>\n</p> ', 12, 'Indice : la réponse est un code à 4 chiffres', 'code', '0534', 'Votre nouvel ennemi aurait bien été aperçu ici mais ce n\'est plus le cas depuis longtemps. Cependant, il se trouverait actuellement à Angers. D\'ailleurs, une statue à son effigie au milieu de la cour vous laisse penser que ganon <span id=\"indiceGanonEspece\"></span>. '),
(3, 'angers', 47.4699766, -0.5592383, 'Le délire particulier du garde est cette fois-ci la géographie.\nIl veut que vous citiez la plus grande ville du Maine-et-Loire ou sinon vous ne passerez pas.\n<form id=\"formRep\">\n    <input id=\"inputRep\" type=\"text\">\n    <input id=\"btnRep\" type=\"submit\">\n</form>\n<p id=\"reponse\"></p>\n<p id=\"indice_p\">\n    <button id=\"indice\">Indice</button>\n</p> ', 12, 'Indice : chauvin mais objectif, quoi que...', 'code', 'Angers', 'Comme vous l\'a dit <span id=\"meilleurAmi\"></span>, \"ganon\" était bien là mais ne devrait pas revenir. Décidément, une autre statue de lui vous laisse penser que Ganon a une corpulence plutôt <span id=\"indiceGanonPoids\"></span>. On vous donne rendez-vous à un endroit où “Arthur peut enfin laisser la lumière allumée”.  (Versailles, au cas où)'),
(4, 'versailles', 48.8058925, 2.1163809, 'Ici, le garde ne laisse apparemment passer que les gens qui ont sur eux un symbole particulier ? Mais de quel symbole parle-t-il ?\nVous entendez parler d\'une certaine croix bleu.\n<p id=\"reponse\"></p>\n<p id=\"indice_p\">\n    <button id=\"indice\">Indice</button>\n</p> ', 12, 'Indice : n\'hésitez pas à vous mouillez pour le trouver', 'cle', 'croixbleu', 'Comme attendu, il n\'est pas là. Etrangement, vous trouvez un rapport de ses tests sanguins. On apprend donc que Ganon appartient au groupe <span id=\"indiceGanonSang\"></span>. De plus, une note préméditant votre arrivée est laissée pour vous :  \"tu ne m\'attraperas pas, je suis actuellement à un château  étant un homonyme d\'une dentelle au fuseau à mailles hexagonales ou encore une crème fouettée et sucrée, voyons si tu oses venir !\"\n(château de Chantilly, plus compliqué j\'avoue)\n'),
(5, 'chantilly', 49.1948498, 2.4865738, 'Le garde vous arrête et vous lance un problème d\'échecs. Il vous dit qu\'il n\'y a qu\'un seul coup gagnant. Vous pouvez l\'aider ou l\'ignorer. \n<form id=\"formRep\">\n    <input id=\"inputRep\" type=\"text\">\n    <input id=\"btnRep\" type=\"submit\">\n</form>\n<img src=\'../image/chess.png\'>\n<p id=\"reponse\"></p>\n<p id=\"indice_p\">\n    <button id=\"indice\">Indice</button>\n</p> ', 11, 'Indice : Toujours faire en-passant quand on le peut ;) réponse : g6', 'code', 'g6', 'A la fin de votre visite, vous reconnaissez au loin celui qui se fait appeler \"ganon\",  et décidez subitement de le pourchasser en courant. Sans vous en êtes rendu compte, vous êtes arrivé au château d\'Hyrule, à Tokyo.'),
(6, 'hyrule', 35.67961, 139.756393, 'Vous êtes bien arrivé<p id=\"reponse\"></p>\n<p id=\"indice_p\">\n    <button id=\"indice\">Indice</button>\n</p> ', 12, 'jsp', 'fedc', 'dcxzsd', 'zsdx');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chateau`
--
ALTER TABLE `chateau`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chateau`
--
ALTER TABLE `chateau`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
