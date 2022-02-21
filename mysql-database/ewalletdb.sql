-- MySQL dump 10.13  Distrib 8.0.27, for Linux (x86_64)
--
-- Host: localhost    Database: ewalletdb
-- ------------------------------------------------------
-- Server version	8.0.27-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `table_payment`
--

DROP TABLE IF EXISTS `table_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `table_payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `order_id` varchar(64) DEFAULT NULL,
  `price_idr` int DEFAULT NULL,
  `success_url` text,
  `cancel_url` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_table_payment` (`user_id`),
  CONSTRAINT `fk_table_payment` FOREIGN KEY (`user_id`) REFERENCES `table_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_payment`
--

LOCK TABLES `table_payment` WRITE;
/*!40000 ALTER TABLE `table_payment` DISABLE KEYS */;
INSERT INTO `table_payment` VALUES (1,1,'C0001',50000,'success',NULL,'2021-12-12 14:39:27'),(2,1,'C0002',100000,'success',NULL,'2021-12-12 14:39:44'),(3,2,'C0003',25000,'success',NULL,'2021-12-12 14:40:20'),(4,2,'C0004',50000,'success',NULL,'2021-12-12 14:40:29');
/*!40000 ALTER TABLE `table_payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `table_transaction`
--

DROP TABLE IF EXISTS `table_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `table_transaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `payment_id` int DEFAULT NULL,
  `status` text,
  `amount` int DEFAULT NULL,
  `fee` int DEFAULT NULL,
  `wallet_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_table_transaction_payment` (`payment_id`),
  KEY `fk_table_transaction_wallet` (`wallet_id`),
  CONSTRAINT `fk_table_transaction_payment` FOREIGN KEY (`payment_id`) REFERENCES `table_payment` (`id`),
  CONSTRAINT `fk_table_transaction_wallet` FOREIGN KEY (`wallet_id`) REFERENCES `table_wallet` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_transaction`
--

LOCK TABLES `table_transaction` WRITE;
/*!40000 ALTER TABLE `table_transaction` DISABLE KEYS */;
INSERT INTO `table_transaction` VALUES (1,1,'Transfer Out',24000,1000,1),(2,1,'Transfer Out',24000,1000,1),(3,2,'Payment',25000,1000,1),(4,2,'Payment',70000,4000,1),(5,3,'Transfer In',24000,1000,2),(6,4,'Payment',45000,5000,2);
/*!40000 ALTER TABLE `table_transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `table_user`
--

DROP TABLE IF EXISTS `table_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `table_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_unique` (`username`),
  UNIQUE KEY `email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_user`
--

LOCK TABLES `table_user` WRITE;
/*!40000 ALTER TABLE `table_user` DISABLE KEYS */;
INSERT INTO `table_user` VALUES (1,'Abu Tismun','ATismun@email.id','P4ssword'),(2,'Andy','andy.ext@omail.com','rahasia'),(3,'Rico','rico@mail.id','12345678'),(4,'Rika','rika@zmail.co.id','rikaakir'),(5,'Joko','joko@jokomail.com','joko123');
/*!40000 ALTER TABLE `table_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `table_wallet`
--

DROP TABLE IF EXISTS `table_wallet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `table_wallet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address` text,
  `user_id` int NOT NULL,
  `currency_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_id` (`user_id`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `table_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_wallet`
--

LOCK TABLES `table_wallet` WRITE;
/*!40000 ALTER TABLE `table_wallet` DISABLE KEYS */;
INSERT INTO `table_wallet` VALUES (1,'Jalan ABC',1,1),(2,'Jalan CDN',2,1),(3,'Jalan EFG',3,1),(4,'Jalan IJK',4,1),(5,'Jalan LMN',5,1);
/*!40000 ALTER TABLE `table_wallet` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-13  5:15:23
