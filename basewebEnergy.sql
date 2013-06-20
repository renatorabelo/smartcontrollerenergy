-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tempo de Geração: 
-- Versão do Servidor: 5.5.27
-- Versão do PHP: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de Dados: `webenergy`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(50) COLLATE utf8_bin NOT NULL,
  `userLogin` varchar(30) COLLATE utf8_bin NOT NULL,
  `userPass` varchar(45) COLLATE utf8_bin NOT NULL,
  `userLastName` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `userMail` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `userPhoto` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `userArduinoIp` varchar(15) COLLATE utf8_bin DEFAULT NULL,
  `userArduinoPort` varchar(6) COLLATE utf8_bin DEFAULT NULL,
  `userSerialXbee` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=2 ;

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`userId`, `userName`, `userLogin`, `userPass`, `userLastName`, `userMail`, `userPhoto`, `userArduinoIp`, `userArduinoPort`, `userSerialXbee`) VALUES
(1, 'KESSILER', 'kessiler', 'GNZz/T8l3j3Vgg/IRPf0W/ErJSU19dC6+7zGdlkFanA=', 'teste', 'kessiler@gmail.com', '', '201.80.135.177', '8081', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `userdata`
--

CREATE TABLE IF NOT EXISTS `userdata` (
  `userId` int(11) NOT NULL,
  `userPotencia` float NOT NULL,
  `userCorrente` float NOT NULL,
  `userDateInfo` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
