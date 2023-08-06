-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 06, 2023 at 03:52 AM
-- Server version: 8.0.34
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test1`
--

-- --------------------------------------------------------

--
-- Table structure for table `food`
--

DROP TABLE IF EXISTS `food`;
CREATE TABLE IF NOT EXISTS `food` (
  `email` varchar(255) NOT NULL DEFAULT 'unknown',
  `quantity` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `shelf_life` varchar(255) NOT NULL,
  `cooked_on` varchar(255) NOT NULL,
  `cooked_at` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Requested',
  `ngo` varchar(255) DEFAULT NULL,
  KEY `fk_food` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `food`
--

INSERT INTO `food` (`email`, `quantity`, `name`, `type`, `shelf_life`, `cooked_on`, `cooked_at`, `status`, `ngo`) VALUES
('undefined', '5kg', 'Biryani', 'Non-Veg', '8', '25-07-2023', '11:11', 'Accepted', NULL),
('suvarna@gmail.com', '5kg', 'Biryani', 'Non-Veg', '8', '25-07-2023', '11:11', 'Accepted', NULL),
('suvarna@gmail.com', '10kg', 'Noodles', 'Non-Veg', '10', '25-07-2023', '11:35am', 'Accepted', NULL),
('undefined', '10kg', 'Fried-Rice', 'Non-Veg', '12', '25-07-2023', '12:00pm', 'Accepted', NULL),
('undefined', '10kg', 'Pulao', 'Veg', '12', '25-07-2023', '12:00pm', 'Accepted', NULL),
('suvarna@gmail.com', '4kg', 'Chinese', 'Veg', '12', '25-07-2023', '12:00pm', 'Accepted', NULL),
('suvarna@gmail.com', '4kg', 'Chicken Curry', 'Non-Veg', '12', '25-07-2023', '12:01pm', 'Accepted', NULL),
('suvarna@gmail.com', '6kg', 'Dal', 'Veg', '12', '25-07-2023', '12:02pm', 'Accepted', NULL),
('undefined', '6kg', 'Rice', 'Veg', '12', '25-07-2023', '12:02pm', 'Accepted', NULL),
('undefined', '6kg', 'Vegetable', 'Veg', '12', '25-07-2023', '12:02pm', 'Accepted', NULL),
('undefined', '6kg', 'Vegetable', 'Veg', '12', '25-07-2023', '12:02pm', 'Accepted', NULL),
('undefined', '6kg', 'Rice', 'Veg', '12', '25-07-2023', '12:02pm', 'Accepted', NULL),
('undefined', '6kg', 'Dal', 'Veg', '12', '25-07-2023', '12:02pm', 'Accepted', NULL),
('undefined', '6kg', 'Curry', 'Veg', '12', '25-07-2023', '12:02pm', 'Accepted', NULL),
('undefined', '6kg', 'Manchurian', 'Veg', '12', '25-07-2023', '12:02pm', 'Delivered', 'susmita'),
('undefined', '6kg', 'Manchurian', 'Veg', '12', '25-07-2023', '12:02pm', 'Delivered', 'susmita'),
('undefined', '6kg', 'Rice', 'Veg', '12', '25-07-2023', '12:02pm', 'Accepted', NULL),
('undefined', '6kg', 'Dal', 'Veg', '12', '25-07-2023', '12:02pm', 'Accepted', NULL),
('undefined', '6kg', 'Chowmeen', 'Veg', '12', '25-07-2023', '12:02pm', 'Accepted', NULL),
('undefined', '6kg', 'Sharbat', 'Veg', '12', '25-07-2023', '12:02pm', 'Accepted', NULL),
('undefined', '6kg', 'Chapati', 'Veg', '12', '25-07-2023', '12:02pm', 'Accepted', NULL),
('undefined', '6kg', 'Bhaji', 'Veg', '12', '25-07-2023', '12:02pm', 'Accepted', NULL),
('undefined', '6kg', 'Rice', 'Veg', '12', '25-07-2023', '12:02pm', 'Accepted', NULL),
('undefined', '6kg', 'Gulab Jamun', 'Veg', '12', '25-07-2023', '12:02pm', 'Accepted', NULL),
('undefined', '6kg', 'Gulab Jamun', 'Veg', '12', '25-07-2023', '12:02pm', 'Accepted', NULL),
('undefined', '6kg', 'Rassgulla', 'Veg', '12', '25-07-2023', '12:02pm', 'Accepted', NULL),
('undefined', '6kg', 'Maggie', 'Veg', '12', '25-07-2023', '12:02pm', 'Accepted', NULL),
('undefined', '6kg', 'Noodles', 'Veg', '12', '25-07-2023', '12:02pm', 'Delivered', 'susmita'),
('undefined', '6kg', 'Noodles', 'Veg', '12', '25-07-2023', '12:02pm', 'Delivered', 'susmita'),
('undefined', '6kg', 'Chinese', 'Veg', '12', '25-07-2023', '12:02pm', 'Accepted', 'suvarna'),
('undefined', '6kg', 'Chinese', 'Non-Veg', '12', '25-07-2023', '12:02pm', 'Accepted', 'suvarna'),
('undefined', '6kg', 'Manchurian', 'Non-Veg', '12', '25-07-2023', '12:02pm', 'Accepted', 'suvarna'),
('suvarna@gmail.com', '6kg', 'Manchurian', 'Non-Veg', '12', '25-07-2023', '12:02pm', 'Accepted', 'undefined'),
('suvarna@gmail.com', '6kg', 'Dosa', 'Veg', '12', '25-07-2023', '12:02pm', 'Delivered', 'suvarna'),
('suvarna@gmail.com', '6kg', 'Idli', 'Veg', '12', '25-07-2023', '12:02pm', 'Delivered', 'suvarna'),
('suvarna@gmail.com', '6kg', 'Idli', 'Veg', '12', '25-07-2023', '12:02pm', 'Delivered', 'suvarna'),
('suvarna@gmail.com', '6kg', 'Idli', 'Veg', '12', '25-07-2023', '12:02pm', 'Delivered', 'suvarna'),
('suvarna@gmail.com', '6kg', 'Idli', 'Veg', '12', '25-07-2023', '12:02pm', 'Delivered', 'suvarna'),
('suvarna@gmail.com', '6kg', 'Idli', 'Veg', '12', '25-07-2023', '12:02pm', 'Delivered', 'suvarna'),
('suvarna@gmail.com', '6kg', 'Wada', 'Veg', '12', '25-07-2023', '12:02pm', 'Delivered', 'suvarna'),
('suvarna@gmail.com', '6kg', 'Dosa', 'Veg', '12', '25-07-2023', '12:02pm', 'Delivered', 'suvarna'),
('undefined', '6kg', 'Noodles', 'Veg', '12', '25-07-2023', '12:02pm', 'Delivered', 'susmita'),
('undefined', '6kg', 'Manchurian', 'Veg', '12', '25-07-2023', '12:02pm', 'Delivered', 'susmita'),
('undefined', '6kg', 'Omelette', 'Veg', '12', '25-07-2023', '12:02pm', 'Delivered', 'susmita'),
('subodh@gmail.com', '6kg', 'Omelette', 'Veg', '12', '25-07-2023', '12:02pm', 'Delivered', 'suvarna'),
('subodh@gmail.com', '6kg', 'Fried Rice', 'Veg', '12', '25-07-2023', '12:02pm', 'Delivered', 'suvarna'),
('undefined', '6kg', 'Fried Rice', 'Veg', '12', '27-07-2023', '12:02pm', 'Delivered', 'susmita'),
('undefined', '6kg', 'Noodles', 'Veg', '12', '27-07-2023', '12:02pm', 'Delivered', 'susmita'),
('undefined', '6kg', 'Noodles', 'Veg', '12', '27-07-2023', '12:02pm', 'Delivered', 'susmita'),
('undefined', '6kg', 'Annam', 'Veg', '12', '27-07-2023', '12:02pm', 'Delivered', 'susmita'),
('undefined', '6kg', 'Pappu', 'Veg', '12', '27-07-2023', '12:02pm', 'Delivered', 'susmita'),
('saanchi@gmail.com', '6kg', 'Sushi', 'Non-Veg', '12', '27-07-2023', '12:02pm', 'Delivered', 'susmita'),
('saanchi@gmail.com', '6kg', 'Prawns', 'Non-Veg', '12', '27-07-2023', '12:02pm', 'Delivered', 'susmita'),
('saanchi@gmail.com', '6kg', 'Chicken', 'Non-Veg', '12', '27-07-2023', '12:02pm', 'Delivered', 'susmita'),
('saanchi@gmail.com', '6kg', 'Prawns', 'Non-Veg', '12', '29-07-2023', '12:02pm', 'Delivered', 'susmita'),
('saanchi@gmail.com', '6kg', 'Sushi', 'Non-Veg', '12', '29-07-2023', '12:02pm', 'Delivered', 'subodh'),
('saanchi@gmail.com', '6kg', 'Paneer', 'Veg', '12', '29-07-2023', '12:02pm', 'Delivered', 'susmita'),
('undefined', '6kg', 'Chicken Paratha', 'Non-Veg', '12', '29-07-2023', '12:02pm', 'Delivered', 'susmita'),
('suvarna@gmail.com', '6kg', 'Mutton Paratha', 'Non-Veg', '12', '29-07-2023', '12:02pm', 'Delivered', 'suvarna'),
('suvarna@gmail.com', '6kg', 'Mutton Paratha', 'Non-Veg', '12', '29-07-2023', '12:02pm', 'Delivered', 'suvarna'),
('timepass@gmail.com', '6kg', 'Paneer', 'Veg', '12', '29-07-2023', '11:11am', 'Accepted', 'timepass'),
('undefined', '6kg', 'kdjfkdj', 'Veg', '12', '29-07-2023', '11:11am', 'Delivered', 'subodh'),
('timepass@gmail.com', '6kg', 'Chicken Paratha', 'Non-Veg', '12', '29-07-2023', '11:11am', 'Delivered', 'timepass'),
('undefined', '5', 'Ghadi', 'Veg', '10', '[object Object]', '[object Object]', 'Delivered', 'susmita'),
('undefined', '5', 'Non-ghadi', 'Non-Veg', '10', '[object Object]', '[object Object]', 'Delivered', 'susmita'),
('subodh@gmail.com', '6', 'Soya Chaap', 'Veg', '12', '2023-07-30', '20:45', 'Requested', NULL),
('subodh@gmail.com', '12', 'Paneer Chaap', 'Veg', '10', '2023-07-30', '20:50', 'Accepted', 'suvarna'),
('subodh@gmail.com', '7', 'Butter chicken', 'Veg', '12', '2021-07-30', '20:54', 'Delivered', 'suvarna'),
('harshita@gmail.com', '6', 'Bhindi', 'Veg', '10', '2023-07-30', '22:08', 'Delivered', 'subodh'),
('undefined', '12', 'Biryani', 'Non-Veg', '12', '2023-08-04', '17:23', 'Accepted', 'subodh'),
('undefined', '12', 'Pulao', 'Veg', '12', '2023-08-04', '17:32', 'Delivered', 'subodh'),
('undefined', '50', 'Chicken paratha', 'Non-Veg', '15', '2023-08-04', '17:38', 'Requested', NULL),
('saanchi@gmail.com', '12', 'Chicken', 'Non-Veg', '12hrs', '2023-08-05', '19:32', 'Delivered', 'susmita'),
('saanchi@gmail.com', '6', 'Paneer', 'Veg', '10hrs', '2023-08-05', '19:54', 'Delivered', 'susmita'),
('susmita@gmail.com', '12', 'Chicken Biryani', 'Non-Veg', '10', '2023-08-05', '20:20[object HTMLSelectElement]', 'Accepted', 'subodh'),
('susmita@gmail.com', '12', 'Pulao', 'Veg', '12', '2023-08-05', '20:21am', 'Accepted', 'subodh'),
('saanchi@gmail.com', '5', 'Prawns', 'Veg', '12hr', '2023-08-06', '00:40am', 'Accepted', 'susmita'),
('saanchi@gmail.com', '7', 'Fish', 'Non-Veg', '12', '2023-08-06', '00:41am', 'Accepted', 'susmita'),
('saanchi@gmail.com', '15', 'Shahi Panner', 'Veg', '10hrs', '2023-08-06', '01:20am', 'Delivered', 'subodh'),
('test@gmail.com', '5', 'Paneer Chaap', 'Veg', '12', '2023-08-06', '07:17am', 'Delivered', 'test'),
('test1@gmail.com', '12', 'Paneer Chaap', 'Veg', '10hrs', '2023-08-06', '07:34am', 'Requested', NULL),
('test2@gmail.com', '10', 'Paneer Chaap', 'Veg', '12hr', '2023-08-06', '07:38am', 'Delivered', 'test2'),
('test2@gmail.com', '7', 'Chicken Curry', 'Non-Veg', '12hr', '2023-08-06', '08:29am', 'Requested', NULL),
('test2@gmail.com', '5', 'Pav Bhaji', 'Veg', '7hrs', '2023-08-07', '09:28am', 'Requested', NULL),
('test2@gmail.com', '7', 'Soya Chaap', 'Veg', '12hrs', '2023-08-08', '10:00am', 'Requested', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ngo_registration`
--

DROP TABLE IF EXISTS `ngo_registration`;
CREATE TABLE IF NOT EXISTS `ngo_registration` (
  `ngo_name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ngo_registration`
--

INSERT INTO `ngo_registration` (`ngo_name`, `username`, `phone`, `address`, `city`, `password`) VALUES
('Gauri Foundations', 'gauri', '1234567890', 'Chocolate city', 'Mumbai', 'Gauri@2004'),
('Harshita Foundations', 'harshita', '07896541230', 'Kalyan', 'Mumbai', 'Harshita@2004'),
('Subodh Foundations', 'subodh', '9004040480', 'Nalasopara', 'Mumbai', 'Subodh@2004'),
('Susmita Foundations', 'susmita', '9004726388', 'Sion-Bandra Link Road', 'Mumbai', 'Susmita@2004'),
('', 'suvarna', '8692074341', 'V/J/594, Shatabdi Nagar, Sion-Bandra Link Road', 'Pune', 'Suvarna@2004'),
('Test Foundations', 'test', '7589632410', 'V-J-594, Dr Babasaheb Ambedkar, Shatabdi Nagar, Sion Bandra Link Road', 'Thane', 'Test@2004'),
('Test Foundations', 'test1', '7589632410', 'V-J-594, Dr Babasaheb Ambedkar, Shatabdi Nagar, Sion Bandra Link Road', 'Thane', 'Test@2004'),
('Test Foundations', 'test2', '7589632410', 'V-J-594, Dr Babasaheb Ambedkar, Shatabdi Nagar, Sion Bandra Link Road', 'Kalyan', 'Test@2004'),
('Timepass Foundations', 'timepass', '9874563210', 'Timepass city', 'Nagpur', 'Timepass@2004');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

DROP TABLE IF EXISTS `registration`;
CREATE TABLE IF NOT EXISTS `registration` (
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`name`, `email`, `phone`, `address`, `city`, `password`) VALUES
('Aditi Shinde', 'aditi@gmail.com', '9892490770', 'Room No 49, New Municipal Chawl No 5, Sant kakkaya marg, Mumbai-400017', 'Thane', 'Aditi@2004'),
('Gauri Shinde', 'gauri@gmail.com', '1234567890', 'Vanilla City', 'Mumbai', 'Gauri@2004'),
('Harshita Dubey', 'harshita@gmail.com', '987654321', 'Kalyan', 'Mumbai', 'Harshita@2004'),
('Saanchi Santi', 'saanchi@gmail.com', '1234567890', 'V/J/594, Shatabdi Nagar, Sion-Bandra Link Road', 'Mumbai', 'Saanchi@2004'),
('Subodh', 'subodh@gmail.com', '9004726388', 'V/J/594, Shatabdi Nagar, Sion-Bandra Link Road', 'Pune', 'Subodh@2004'),
('Susmita Santi', 'susmita@gmail.com', '9004726388', 'V-J-594, Dr Babasaheb Ambedkar, Shatabdi Nagar, Sion Bandra Link Road', 'Mumbai', ''),
('Susmita', 'susmita1@gmail.com', '9004726388', 'V/J/594', 'Mumbai', 'Susmita@2004'),
('Susmita', 'susmita2@gmail.com', '9004726388', 'V/J/594, Shatabdi Nagar, Sion-Bandra Link Road', 'Mumbai', 'Susmita@2004'),
('Suvarna', 'suvarna@gmail.com', '8692074341', 'V/J/594, Shatabdi Nagar, Sion-Bandra Link Road', 'Pune', 'Suvarna@2004'),
('Swarali', 'swarali@gmail.com', '06598741230', 'V-J-594, Dr Babasaheb Ambedkar, Shatabdi Nagar, Sion Bandra Link Road', 'Mumbai', 'Swarali@2004'),
('Susmita Santi', 'test@gmail.com', '1234567890', 'V-J-594, Dr Babasaheb Ambedkar, Shatabdi Nagar, Sion Bandra Link Road', 'Thane', 'Test@2004'),
('Test Person', 'test1@gmail.com', '1234567890', 'V-J-594, Dr Babasaheb Ambedkar, Shatabdi Nagar, Sion Bandra Link Road', 'Kalyan', 'Test@2004'),
('Susmita Santi', 'test2@gmail.com', '1234567890', 'V-J-594, Dr Babasaheb Ambedkar, Shatabdi Nagar, Sion Bandra Link Road', 'Kalyan', 'Test@2004'),
('timepass', 'timepass@gmail.com', '1234567890', 'V/J/594, Shatabdi Nagar, Sion-Bandra Link Road', 'Nagpur', 'Timepass@2004'),
('Susmita Sen', 'undefined', '9004726388', 'V/J/594', 'Mumbai', 'Susmita@2004');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `food`
--
ALTER TABLE `food`
  ADD CONSTRAINT `fk_food` FOREIGN KEY (`email`) REFERENCES `registration` (`email`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
