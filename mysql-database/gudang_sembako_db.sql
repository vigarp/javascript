-- MySQL dump 10.13  Distrib 8.0.27, for Linux (x86_64)
--
-- Host: localhost    Database: gudang_sembako_db
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
-- Table structure for table `detail_transaction`
--

DROP TABLE IF EXISTS `detail_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detail_transaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_transaction` varchar(64) NOT NULL,
  `id_product` int NOT NULL,
  `qty` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_detail_transaction` (`id_transaction`),
  KEY `fk_id_product` (`id_product`),
  CONSTRAINT `fk_detail_transaction` FOREIGN KEY (`id_transaction`) REFERENCES `table_transaction` (`invoice`),
  CONSTRAINT `fk_id_product` FOREIGN KEY (`id_product`) REFERENCES `table_product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detail_transaction`
--

LOCK TABLES `detail_transaction` WRITE;
/*!40000 ALTER TABLE `detail_transaction` DISABLE KEYS */;
INSERT INTO `detail_transaction` VALUES (1,'INV-001',1,40),(2,'INV-001',2,2),(3,'INV-001',3,2),(4,'INV-002',4,10),(5,'INV-002',1,10),(6,'INV-003',2,1),(7,'INV-003',5,1),(8,'INV-004',6,1),(9,'INV-004',4,4);
/*!40000 ALTER TABLE `detail_transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `table_product`
--

DROP TABLE IF EXISTS `table_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `table_product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(100) NOT NULL,
  `price` int NOT NULL,
  `category` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_product`
--

LOCK TABLES `table_product` WRITE;
/*!40000 ALTER TABLE `table_product` DISABLE KEYS */;
INSERT INTO `table_product` VALUES (1,'Indomie',2500,'mie instan'),(2,'Coca-cola',5000,'soda'),(3,'Aqua',5000,'air mineral'),(4,'Mie sedap',2500,'mie instan'),(5,'Sprite',5000,'soda'),(6,'Le minerale',5000,'air mineral');
/*!40000 ALTER TABLE `table_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `table_transaction`
--

DROP TABLE IF EXISTS `table_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `table_transaction` (
  `invoice` varchar(64) NOT NULL,
  `date` date NOT NULL,
  `total` int NOT NULL,
  PRIMARY KEY (`invoice`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_transaction`
--

LOCK TABLES `table_transaction` WRITE;
/*!40000 ALTER TABLE `table_transaction` DISABLE KEYS */;
INSERT INTO `table_transaction` VALUES ('INV-001','2021-01-01',120000),('INV-002','2021-01-02',50000),('INV-003','2021-01-02',10000),('INV-004','2021-01-03',15000);
/*!40000 ALTER TABLE `table_transaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-13  5:14:51
