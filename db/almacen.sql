-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-05-2024 a las 22:44:43
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `almacen`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `id` int(11) NOT NULL,
  `start` varchar(45) NOT NULL,
  `end` varchar(50) NOT NULL,
  `title` varchar(45) NOT NULL,
  `backgroundColor` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id`, `start`, `end`, `title`, `backgroundColor`) VALUES
(18, '2024-05-08', '', 'asda', 'green'),
(20, '2024-05-10', '', 'dormir 2 ', 'blue'),
(22, '2024-05-09', '', 'asda', 'green'),
(23, '2024-05-02', '', 'cumple', 'orange'),
(24, '2024-05-04', '', 'despedida', 'red'),
(25, '2024-05-03', '', 'cena', 'red');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `descripcion` varchar(45) NOT NULL,
  `price` double NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `name`, `descripcion`, `price`, `stock`) VALUES
(7, 'agua', 'Agua natural', 2, 110),
(11, 'agua con gas', 'Agua 2l', 31, 110),
(13, 'ses', 'sss', 2, 1),
(16, 'pepsi', 'casi cola ', 3, 32),
(17, 'laura', 'lauraaaa', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sitios`
--

CREATE TABLE `sitios` (
  `id` varchar(50) NOT NULL,
  `text` varchar(50) NOT NULL,
  `category` varchar(250) NOT NULL,
  `place_name` varchar(250) NOT NULL,
  `geometry` point NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sitios`
--

INSERT INTO `sitios` (`id`, `text`, `category`, `place_name`, `geometry`) VALUES
('poi.111669188186', 'Cine Madrigal', 'indie theatre, indie theater', 'Cine Madrigal, Carrera de la Virgen s/n, Granada, Granada 18005, Spain', 0x0000000001010000002a00c63368c80cc0ff774485ea954240),
('poi.1271310323837', 'Petit Moll', 'mediterranean restaurant, mediterranean food, restaurant', 'Petit Moll, Vilassar de Mar, Barcelona 08340, Spain', 0x000000000101000000e4a3c519c31c0340406a1327f7bf4440),
('poi.223338358152', 'Ocine', 'cinema, theater, movie theater', 'Ocine, C. Montseny, 4, Granollers, Barcelona 08402, Spain', 0x000000000101000000ace0b721c66b024028486c770fce4440),
('poi.309237657229', 'Cines El Nord', 'multiplex theatre, mutliplex theater', 'Cines El Nord, Dr. Salvador Llobet, 72, Granollers, Barcelona 08402, Spain', 0x0000000001010000001f317a6ea16b024044f9821612ce4440),
('poi.309237694037', 'Teatre l\'Amistat', 'concert hall', 'Teatre l\'Amistat, Calle de San Antonio, 60, 08330 Premià de Mar, Premià de Mar, Barcelona 08330, Spain', 0x000000000101000000db6e826f9ade0240817a336abebe4440),
('poi.326417600597', 'Teatre Monumental', 'theatre, theater, music, show venue, concert, concert hall', 'Teatre Monumental, La Riera, 169, Mataró, Barcelona 08302, Spain', 0x000000000101000000aaf23d23118a03400f62670a9dc54440),
('poi.343597476066', 'El Terral', 'mediterranean restaurant, mediterranean food, restaurant', 'El Terral, Carrer SANT JOAN, 46, Bajo, Vilassar de Mar, Barcelona 08340, Spain', 0x000000000101000000a5660fb40223034050c3b7b06ec04440),
('poi.420906891231', 'Teatre Zorrilla', 'theatre, theater, music, show venue, concert, concert hall', 'Teatre Zorrilla, Canonge Baranera, Badalona, Barcelona 08911, Spain', 0x000000000101000000ec6b5d6a84fe01409e978a8d79b94440),
('poi.549755850218', 'Cinema La Calandria', 'cinema, theater, movie theater', 'Cinema La Calandria, Carrer del Doctor Agell, 7, El Masnou, Barcelona 08320, Spain', 0x0000000001010000006823d74d298f024001a4367172bd4440),
('poi.575525654150', 'Teatre Principal', 'theatre, theater, music, show venue, concert, concert hall', 'Teatre Principal, Carrer Francesc Layret, Badalona, Barcelona 08911, Spain', 0x00000000010100000012a27c410bf9014066dafe9595b94440),
('poi.584115568233', 'Cinesa Mataró Parc', 'multiplex theatre, mutliplex theater', 'Cinesa Mataró Parc, C.C. Mataró Parc, Mataró, Barcelona 08304, Spain', 0x000000000101000000573f36c98f7803401b12f758fac64440),
('poi.601295521284', 'Teatre La Palma', 'theatre, theater, music, show venue, concert, concert hall', 'Teatre La Palma, Teià, Barcelona 08329, Spain', 0x00000000010100000078b6476fb88f02402385b2f0f5bf4440),
('poi.60129608935', 'Atlantida 2', 'italian restaurant, italian food, restaurant', 'Atlantida 2, Avinguda Carles III, 48, Vilassar de Mar, Barcelona 08340, Spain', 0x0000000001010000008272dbbe471d0340486fb88fdcc04440),
('poi.738734412875', 'Espinaler', 'tapas, tapas restaurant, spanish restaurant, spanish food, restaurant', 'Espinaler, C. Camí Ral, 2, Vilassar de Mar, Barcelona 08340, Spain', 0x00000000010100000063096b63ec2403409818cbf44bc04440),
('poi.747324413746', 'Poc a Foc', 'spanish restaurant, spanish food, restaurant', 'Poc a Foc, Camp De Mar, 8, Premià de Mar, Barcelona 08330, Spain', 0x00000000010100000054ac1a84b9fd0240ffb0a54753bf4440),
('poi.824633828641', 'Ex-cine Iluro', 'cinema, theater, movie theater', 'Ex-cine Iluro, Camí Ral 523, Mataró, Barcelona 08302, Spain', 0x0000000001010000006f46cd57c9870340e6400fb56dc44440);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sitios`
--
ALTER TABLE `sitios`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
