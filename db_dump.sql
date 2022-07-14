-- MySQL dump 10.13  Distrib 8.0.17, for macos10.14 (x86_64)
--
-- Host: localhost    Database: anubis
-- ------------------------------------------------------
-- Server version	8.0.17

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` varchar(36) NOT NULL,
  `role_id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `is_suspend` tinyint(1) DEFAULT NULL,
  `auth_token` text,
  `access_token` text,
  `refresh_token` text,
  `otp` varchar(6) DEFAULT NULL,
  `is_otp` tinyint(1) DEFAULT NULL,
  `is_email_verified` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  `update_by` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone` (`phone`),
  UNIQUE KEY `user_name` (`user_name`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`),
  CONSTRAINT `admin_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`),
  CONSTRAINT `admin_ibfk_3` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`),
  CONSTRAINT `admin_ibfk_4` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('16fa38c5-85c4-4bed-88a9-432d04fcdbe9',1,'markus@gmail.com','089515520202','markus','$2b$12$NeQdos.aYwGCOXy0qeEsIO.ZWYTl0OYU2PgYP4KOVPy.Mr7WGe4gy',0,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiVTJGc2RHVmtYMStEd0pBSzBIU25jL21SbzJraUZIOXg3RFZvSXB5NFVQeXRVUHowQVRneHpjMFgxQTM1WmJUeldpSFdFUWRiS3B1dkIrMTBibm4wTTN6ajR6T0FpTVc5TlRUQmIrZGV5K1k9IiwiaWF0IjoxNjQ2Njk1NDU0LCJleHAiOjE2NDY2OTkwNTQsImF1ZCI6IkFudWJpcy1XZWItQXBwIiwiaXNzIjoiTS1BbnViaXMtQmFja2VuZCIsInN1YiI6IkFudWJpcy1BcGktVjEifQ.63KU5IphGhtRn8hxc4Au5Whrzc5pm1LpgqBORTQ8-1s','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiVTJGc2RHVmtYMTh1cWxrWlVBcmd2Q0YzU20xakJlVU1sbFA0b2NSOXJuN2lRYnlyU1VPdnh2VmVVNXg2QTJmZEs2ZHZZdStYSkFsR1VZRWhtTzFFK3VZUmlOR2VxQXhPTWpCMGxQVjZPS289IiwiaWF0IjoxNjQ2Njk1NDU0LCJleHAiOjE2NDY2OTkwNTQsImF1ZCI6IkFudWJpcy1XZWItQXBwIiwiaXNzIjoiTS1BbnViaXMtQmFja2VuZCIsInN1YiI6IkFudWJpcy1BcGktVjEifQ.AA81qJs9tDJZ1HfGx8OCFfKKUPUB1vS3MHP0SC0bhrc','235364',1,0,'2022-03-07 14:57:03',NULL,'2022-03-07 14:57:03',NULL),('25168506-9ca9-11ec-8c3c-48478ce7e2b6',2,'joko@gmail.com','089515520200','joko','$2b$12$YLTD67/svI2xfgMN.9Ipru1JJFAnMCfbDCWJvyLopZKORoG5bw0Nq',0,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiVTJGc2RHVmtYMS92Z0VtYW9WVjlqZWV5bTZabTM1KzZsbk45eUNKLzZZTyswRVVqNGhmYzNYaGQ2SjhtYnZqenNzRFhYMFJMN0Y2U1ZqKzFoTURoQnc9PSIsImlhdCI6MTY0NjkxMDc3NCwiZXhwIjoxNjQ5NTAyNzc0LCJhdWQiOiJBbnViaXMtV2ViLUFwcCIsImlzcyI6Ik0tQW51YmlzLUJhY2tlbmQiLCJzdWIiOiJBbnViaXMtQXBpLVYxIn0.c4IWizlmTqb99zCBD2d3O-PHG6FmWrI7Jbo0YS7Fi9Q','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiVTJGc2RHVmtYMTltYVR6RDVoa0ozTEVSWFBFYy80RzBSVkZDbUFYNm1xWVpNVUEvWFFOT1VrS3BUNWpZbDRWbkY3dC9iZ2E4QlU2b2ozTEU5OW50dGc9PSIsImlhdCI6MTY0NjkxMDc3NCwiZXhwIjoxNjQ5NTAyNzc0LCJhdWQiOiJBbnViaXMtV2ViLUFwcCIsImlzcyI6Ik0tQW51YmlzLUJhY2tlbmQiLCJzdWIiOiJBbnViaXMtQXBpLVYxIn0.gTXS8liuvtIVrUubedSutv937DH0VA_ZvnvC6-fPfaA','114323',1,0,'2022-03-05 17:24:42',NULL,'2022-03-05 17:24:42',NULL),('321b789c-9ca9-11ec-8c3c-48478ce7e2b6',3,'bambang@gmail.com','089515520201','bambang','$2b$12$Dz21mfdIRlRXyX7T25Qtr.sqjTN7jOQZ/yqD.P2HvBJLSuLsXOvRO',0,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiVTJGc2RHVmtYMS9qUGxzbUhZV0xTeW1ocnVUS1JzcFZKRnpxbnpPMUprWmFnWGkzTXNCU1BvMU1EWjVhelFPT21JVmxpZnpsWjZVTVZMSXlGTFR0aGc9PSIsImlhdCI6MTY0NjUwMTEwNCwiZXhwIjoxNjQ2NTA0NzA0LCJhdWQiOiJBbnViaXMtV2ViLUFwcCIsImlzcyI6Ik0tQW51YmlzLUJhY2tlbmQiLCJzdWIiOiJBbnViaXMtQXBpLVYxIn0.jW1gZ1hcpA0BERl7aqlpAFKkObTvDkufQTN0jGk1KQk','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiVTJGc2RHVmtYMTlndzlLMmxweWw1Z01mcFlOZlBTNm5BMHZaaDkwTEwya1hIZTBuQVBHdTk5bWxHdVViSk5ISEZoVkhuQmRxRGZ0VllRbkhDd1V0RGRKRHdpMWIrN3NOcFBDWThVK1dJY2c9IiwiaWF0IjoxNjQ2NTAxMTA0LCJleHAiOjE2NDkwOTMxMDQsImF1ZCI6IkFudWJpcy1XZWItQXBwIiwiaXNzIjoiTS1BbnViaXMtQmFja2VuZCIsInN1YiI6IkFudWJpcy1BcGktVjEifQ.O9ziJwCv3THJbLmD_C8zpVZcD9XulE2XNq-ZaNBLxxk','693862',1,0,'2022-03-05 17:25:04',NULL,'2022-03-05 17:25:04',NULL),('45cf07a2-9ca2-11ec-8c3c-48478ce7e2b6',1,'arsad2.sa@gmail.com','089515520203','ardi','$2b$12$rboDhaemH9ptdP9wQU6gJeUDK5s6OOM76sqrogv3GQOGxcga5QYVO',0,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiVTJGc2RHVmtYMTk4QjJZeXZjbmJPQ0dhQ2NVMGhvYTN1Vyt6RmxEVE9jcnFGcjk1eWRMVUI1NG16Q0FOSTZvWmhLakttZHRHNE16ZVZndVp6eHpMcFdxeko0NXljSUxoeHM2VCtGT1dPRzQ9IiwiaWF0IjoxNjQ2NjcyODY1LCJleHAiOjE2NDY2NzY0NjUsImF1ZCI6IkFudWJpcy1XZWItQXBwIiwiaXNzIjoiTS1BbnViaXMtQmFja2VuZCIsInN1YiI6IkFudWJpcy1BcGktVjEifQ.LuqNJhlFxijji8OrCSLk-Z42Iamdd8YTJD_buUD2b08','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiVTJGc2RHVmtYMS9ZK0dEM09oTEczdklVcjZVOXE1ZHB1bTlGN2U5d1U3RmcyOExnYjdQNHV6UVVKK2ovNHgyWXVDbTY3REpNNWxzdDBjRDcrVXNyN1pCTURCWXJNNHdUQzF6QzFiaHVrZjA9IiwiaWF0IjoxNjQ2NjcyODY1LCJleHAiOjE2NDY2NzY0NjUsImF1ZCI6IkFudWJpcy1XZWItQXBwIiwiaXNzIjoiTS1BbnViaXMtQmFja2VuZCIsInN1YiI6IkFudWJpcy1BcGktVjEifQ.Gn-z1L1pvLgA2MI2jkzRchfIO-QLIPDEkKjMJb1ywns','448780',1,0,'2022-03-05 16:35:31',NULL,'2022-03-05 16:35:31',NULL),('de578bc0-548d-4c8c-ace0-df57ed0f0ffc',1,'mansur@gmail.com','08912340000','mansur','$2b$12$djY22qzWrli6GtWdiSLo5Oy.APqOGADnpCsXyig9CNm7Bbn28fOPK',0,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiVTJGc2RHVmtYMTk3Q0QwQ3hHZTRZZUpiZUtlRUZ6enI2ckdldk1KclJ2NHY2ZEx5WVhTVmVNMDhZeEl3eHVNWkdrNCt4S2g1U0laRDRhTkxDVFRJUENQYm1VL01EY0xaTjcwOU02bGlYcnc9IiwiaWF0IjoxNjQ2Njk0ODc3LCJleHAiOjE2NDY2OTg0NzcsImF1ZCI6IkFudWJpcy1XZWItQXBwIiwiaXNzIjoiTS1BbnViaXMtQmFja2VuZCIsInN1YiI6IkFudWJpcy1BcGktVjEifQ.eU_PfXVBwHpCmZmff1MVUIHa8n_XCZ6hAPiodHRzRzU','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiVTJGc2RHVmtYMSs3QWFSMytxYzRHLzFxNjE1WnpZcVpNd09NaUtrSERoUThZSjlpeVg4disxUW04Mk0wTGV5V3BuMHlUOXNjY0RTcTJhTW1sR2t2aUw5YTI5b2FmTEVtTzMzZ1NibW1ybFk9IiwiaWF0IjoxNjQ2Njk0ODc3LCJleHAiOjE2NDY3MTI4NzcsImF1ZCI6IkFudWJpcy1XZWItQXBwIiwiaXNzIjoiTS1BbnViaXMtQmFja2VuZCIsInN1YiI6IkFudWJpcy1BcGktVjEifQ.DBY4Mug97Fxe04UpYUeYmD_qX1U52gLXUh_UnV1qqpE','356748',1,0,'2022-03-07 23:14:38',NULL,'2022-03-07 23:14:38',NULL);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image_after`
--

DROP TABLE IF EXISTS `image_after`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image_after` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` text,
  `name` varchar(200) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_after`
--

LOCK TABLES `image_after` WRITE;
/*!40000 ALTER TABLE `image_after` DISABLE KEYS */;
INSERT INTO `image_after` VALUES (1,'http://localhost:3000/images/82dc74f8-7d2d-434d-84db-11a9f58c1fba.jpg','modify request','image satu upload');
/*!40000 ALTER TABLE `image_after` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image_before`
--

DROP TABLE IF EXISTS `image_before`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image_before` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` text,
  `name` varchar(200) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_before`
--

LOCK TABLES `image_before` WRITE;
/*!40000 ALTER TABLE `image_before` DISABLE KEYS */;
INSERT INTO `image_before` VALUES (4,'http://localhost:3000/images/60c27239-1e6f-4a4a-abc1-245257edf7f8.jpg','modify request','image satu upload'),(5,'http://localhost:3000/images/373c468a-79ea-4cf3-9db5-1cbb7b80b561.jpg','modify request','image satu upload'),(6,'http://8.214.18.134:3006/images/7dd5c841-fa23-40ff-9de9-2710bcd793cf.jpg','modify request','image dua upload');
/*!40000 ALTER TABLE `image_before` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image_process`
--

DROP TABLE IF EXISTS `image_process`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image_process` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` text,
  `name` varchar(200) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_process`
--

LOCK TABLES `image_process` WRITE;
/*!40000 ALTER TABLE `image_process` DISABLE KEYS */;
INSERT INTO `image_process` VALUES (1,'http://localhost:3000/images/90d61cfc-006b-4274-96f5-fbdb6f08f410.jpg','modify request','image satu upload');
/*!40000 ALTER TABLE `image_process` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lantai`
--

DROP TABLE IF EXISTS `lantai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lantai` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `location_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `location_id` (`location_id`),
  CONSTRAINT `lantai_ibfk_1` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`),
  CONSTRAINT `lantai_ibfk_2` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lantai`
--

LOCK TABLES `lantai` WRITE;
/*!40000 ALTER TABLE `lantai` DISABLE KEYS */;
INSERT INTO `lantai` VALUES (1,'Lt. 1',1),(2,'Lt. 2',1),(3,'Lt. 3',1),(4,'Lt. 4',1),(5,'Lt. 5',1),(6,'Lt. 1',2),(7,'Lt. 2',2),(8,'Lt. 3',2),(9,'Lt. 4',2),(10,'Lt. 5',2),(11,'Lt. 1',3),(12,'Lt. 2',3),(13,'Lt. 3',3),(14,'Lt. 4',3),(15,'Lt. 5',3),(16,'Lt. 1',4),(17,'Lt. 2',4),(18,'Lt. 3',4),(19,'Lt. 4',4),(20,'Lt. 5',4);
/*!40000 ALTER TABLE `lantai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'STO KBL'),(2,'STO LMG'),(3,'STO MGO'),(4,'STO BLP');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location_data`
--

DROP TABLE IF EXISTS `location_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `location_id` int(11) DEFAULT NULL,
  `lantai_id` int(11) DEFAULT NULL,
  `ruangan_id` int(11) DEFAULT NULL,
  `no_rack_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `location_id` (`location_id`),
  KEY `lantai_id` (`lantai_id`),
  KEY `ruangan_id` (`ruangan_id`),
  KEY `no_rack_id` (`no_rack_id`),
  CONSTRAINT `location_data_ibfk_1` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`),
  CONSTRAINT `location_data_ibfk_2` FOREIGN KEY (`lantai_id`) REFERENCES `lantai` (`id`),
  CONSTRAINT `location_data_ibfk_3` FOREIGN KEY (`ruangan_id`) REFERENCES `ruangan` (`id`),
  CONSTRAINT `location_data_ibfk_4` FOREIGN KEY (`no_rack_id`) REFERENCES `no_rack` (`id`),
  CONSTRAINT `location_data_ibfk_5` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`),
  CONSTRAINT `location_data_ibfk_6` FOREIGN KEY (`lantai_id`) REFERENCES `lantai` (`id`),
  CONSTRAINT `location_data_ibfk_7` FOREIGN KEY (`ruangan_id`) REFERENCES `ruangan` (`id`),
  CONSTRAINT `location_data_ibfk_8` FOREIGN KEY (`no_rack_id`) REFERENCES `no_rack` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location_data`
--

LOCK TABLES `location_data` WRITE;
/*!40000 ALTER TABLE `location_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `location_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `no_rack`
--

DROP TABLE IF EXISTS `no_rack`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `no_rack` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `location_id` int(11) DEFAULT NULL,
  `lantai_id` int(11) DEFAULT NULL,
  `ruangan_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `location_id` (`location_id`),
  KEY `lantai_id` (`lantai_id`),
  KEY `ruangan_id` (`ruangan_id`),
  CONSTRAINT `no_rack_ibfk_1` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`),
  CONSTRAINT `no_rack_ibfk_2` FOREIGN KEY (`lantai_id`) REFERENCES `lantai` (`id`),
  CONSTRAINT `no_rack_ibfk_3` FOREIGN KEY (`ruangan_id`) REFERENCES `ruangan` (`id`),
  CONSTRAINT `no_rack_ibfk_4` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`),
  CONSTRAINT `no_rack_ibfk_5` FOREIGN KEY (`lantai_id`) REFERENCES `lantai` (`id`),
  CONSTRAINT `no_rack_ibfk_6` FOREIGN KEY (`ruangan_id`) REFERENCES `ruangan` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `no_rack`
--

LOCK TABLES `no_rack` WRITE;
/*!40000 ALTER TABLE `no_rack` DISABLE KEYS */;
INSERT INTO `no_rack` VALUES (1,'OLT-A-1',2,1,1),(2,'OLT-A-2',2,1,1),(3,'OLT-A-3',2,1,1),(4,'OLT-A-4',2,1,1),(5,'DBD-A-1',1,1,2),(6,'DBD-A-2',1,2,2),(7,'MGM-A-3',1,3,3),(8,'MGM-A-4',1,1,3),(9,'NGN-A-1',3,1,2),(10,'NGN-A-2',3,2,2),(11,'NGN-A-3',3,3,3);
/*!40000 ALTER TABLE `no_rack` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permit`
--

DROP TABLE IF EXISTS `permit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `admin_id` varchar(36) DEFAULT NULL,
  `waspang_id` varchar(36) DEFAULT NULL,
  `vendor_id` varchar(36) DEFAULT NULL,
  `vendor` varchar(200) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `status_security` varchar(50) DEFAULT NULL,
  `code` varchar(100) NOT NULL,
  `nde` varchar(200) DEFAULT NULL,
  `simaru` varchar(200) DEFAULT NULL,
  `title` varchar(100) NOT NULL,
  `description` text,
  `token` text,
  `to_do` text,
  `image_before_id` int(11) DEFAULT NULL,
  `image_process_id` int(11) DEFAULT NULL,
  `image_after_id` int(11) DEFAULT NULL,
  `teknisi_data_id` varchar(36) DEFAULT NULL,
  `location_id` int(11) DEFAULT NULL,
  `lantai_id` int(11) DEFAULT NULL,
  `ruangan_id` int(11) DEFAULT NULL,
  `no_rack_id` int(11) DEFAULT NULL,
  `created_at` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `admin_id` (`admin_id`),
  KEY `waspang_id` (`waspang_id`),
  KEY `vendor_id` (`vendor_id`),
  KEY `image_before_id` (`image_before_id`),
  KEY `image_process_id` (`image_process_id`),
  KEY `image_after_id` (`image_after_id`),
  CONSTRAINT `permit_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`),
  CONSTRAINT `permit_ibfk_13` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`id`),
  CONSTRAINT `permit_ibfk_14` FOREIGN KEY (`image_before_id`) REFERENCES `image_before` (`id`),
  CONSTRAINT `permit_ibfk_15` FOREIGN KEY (`image_process_id`) REFERENCES `image_process` (`id`),
  CONSTRAINT `permit_ibfk_16` FOREIGN KEY (`image_after_id`) REFERENCES `image_after` (`id`),
  CONSTRAINT `permit_ibfk_17` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`),
  CONSTRAINT `permit_ibfk_21` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`id`),
  CONSTRAINT `permit_ibfk_22` FOREIGN KEY (`image_before_id`) REFERENCES `image_before` (`id`),
  CONSTRAINT `permit_ibfk_23` FOREIGN KEY (`image_process_id`) REFERENCES `image_process` (`id`),
  CONSTRAINT `permit_ibfk_24` FOREIGN KEY (`image_after_id`) REFERENCES `image_after` (`id`),
  CONSTRAINT `permit_ibfk_25` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`),
  CONSTRAINT `permit_ibfk_29` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`id`),
  CONSTRAINT `permit_ibfk_30` FOREIGN KEY (`image_before_id`) REFERENCES `image_before` (`id`),
  CONSTRAINT `permit_ibfk_31` FOREIGN KEY (`image_process_id`) REFERENCES `image_process` (`id`),
  CONSTRAINT `permit_ibfk_32` FOREIGN KEY (`image_after_id`) REFERENCES `image_after` (`id`),
  CONSTRAINT `permit_ibfk_5` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`id`),
  CONSTRAINT `permit_ibfk_6` FOREIGN KEY (`image_before_id`) REFERENCES `image_before` (`id`),
  CONSTRAINT `permit_ibfk_7` FOREIGN KEY (`image_process_id`) REFERENCES `image_process` (`id`),
  CONSTRAINT `permit_ibfk_8` FOREIGN KEY (`image_after_id`) REFERENCES `image_after` (`id`),
  CONSTRAINT `permit_ibfk_9` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permit`
--

LOCK TABLES `permit` WRITE;
/*!40000 ALTER TABLE `permit` DISABLE KEYS */;
INSERT INTO `permit` VALUES (5,'45cf07a2-9ca2-11ec-8c3c-48478ce7e2b6','e24e6f42-c259-4830-ae80-ceb8097b6d06','002e289c-9ca0-11ec-8c3c-48478ce7e2b6','PT. Multipolar','NEED APPROVAL','APPROVED','001/STO/KBL/2022','PT.M/PMT001/8185b-e24e6','SIMARU/STO/KBL/2022','Survey deployment mini OLT, Cek redaman ODC-FH, Through connect OA to ODC, Integrasi OLT - Metro','Survey deployment mini OLT, Cek redaman ODC-FH, Through connect OA to ODC, Integrasi OLT - Metro','','Survey deployment mini OLT, Cek redaman ODC-FH, Through connect OA to ODC, Integrasi OLT - Metro',5,1,1,'8185b9ad-6e1a-4b29-9636-1ae29d41964b',1,1,2,5,NULL),(6,'45cf07a2-9ca2-11ec-8c3c-48478ce7e2b6','e24e6f42-c259-4830-ae80-ceb8097b6d06','002e289c-9ca0-11ec-8c3c-48478ce7e2b6','PT. Multipolar','PROCESS','NEED APPROVAL','005/STO/KBL/2022','PT.M/PMT005/8185b-e24e6','SIMARU/STO/KBL/2022','Survey deployment mini OLT, Cek redaman ODC-FH, Through connect OA to ODC, Integrasi OLT - Metro','Survey deployment mini OLT, Cek redaman ODC-FH, Through connect OA to ODC, Integrasi OLT - Metro','','Survey deployment mini OLT, Cek redaman ODC-FH, Through connect OA to ODC, Integrasi OLT - Metro',NULL,NULL,NULL,'8185b9ad-6e1a-4b29-9636-1ae29d41964b',1,1,2,5,NULL),(7,'45cf07a2-9ca2-11ec-8c3c-48478ce7e2b6','e24e6f42-c259-4830-ae80-ceb8097b6d06','002e289c-9ca0-11ec-8c3c-48478ce7e2b6','PT. Multipolar','PROCESS','NEED APPROVAL','007/STO/KBL/2022','PT.M/PMT007/8185b-e24e6','SIMARU/STO/KBL/2022','Survey deployment mini OLT, Cek redaman ODC-FH, Through connect OA to ODC, Integrasi OLT - Metro','Survey deployment mini OLT, Cek redaman ODC-FH, Through connect OA to ODC, Integrasi OLT - Metro','','Survey deployment mini OLT, Cek redaman ODC-FH, Through connect OA to ODC, Integrasi OLT - Metro',NULL,NULL,NULL,'8185b9ad-6e1a-4b29-9636-1ae29d41964b',1,1,2,5,NULL),(8,'45cf07a2-9ca2-11ec-8c3c-48478ce7e2b6','e24e6f42-c259-4830-ae80-ceb8097b6d06','002e289c-9ca0-11ec-8c3c-48478ce7e2b6','PT. Multipolar','PROCESS','NEED APPROVAL','008/STO/KBL/2022','PT.M/PMT008/8185b-e24e6','SIMARU/STO/KBL/2022','mengerjakan pekerjaan 1','mengerjakan pekerjaan 1','',NULL,6,NULL,NULL,'8185b9ad-6e1a-4b29-9636-1ae29d41964b',1,1,2,5,NULL),(9,'45cf07a2-9ca2-11ec-8c3c-48478ce7e2b6','e24e6f42-c259-4830-ae80-ceb8097b6d06','002e289c-9ca0-11ec-8c3c-48478ce7e2b6','PT. Multipolar','PROCESS','NEED APPROVAL','009/STO/KBL/2022','PT.M/PMT009/8185b-e24e6','SIMARU/STO/KBL/2022','mengerjakan pekerjaan 2','mengerjakan pekerjaan 2','',NULL,NULL,NULL,NULL,'8185b9ad-6e1a-4b29-9636-1ae29d41964b',1,1,2,5,NULL),(10,'45cf07a2-9ca2-11ec-8c3c-48478ce7e2b6','e24e6f42-c259-4830-ae80-ceb8097b6d06','002e289c-9ca0-11ec-8c3c-48478ce7e2b6','PT. Multipolar','PROCESS','NEED APPROVAL','010/STO/KBL/2022','PT.M/PMT010/8185b-e24e6','SIMARU/STO/KBL/2022','mengerjakan pekerjaan 3','mengerjakan pekerjaan 3','',NULL,NULL,NULL,NULL,'8185b9ad-6e1a-4b29-9636-1ae29d41964b',1,1,2,5,NULL),(11,'45cf07a2-9ca2-11ec-8c3c-48478ce7e2b6','e24e6f42-c259-4830-ae80-ceb8097b6d06','002e289c-9ca0-11ec-8c3c-48478ce7e2b6','PT. Multipolar','PROCESS','NEED APPROVAL','011/STO/KBL/2022','PT.M/PMT011/8185b-e24e6','SIMARU/STO/KBL/2022','mengerjakan pekerjaan 4','mengerjakan pekerjaan 4','',NULL,NULL,NULL,NULL,'8185b9ad-6e1a-4b29-9636-1ae29d41964b',1,1,2,5,NULL),(12,'45cf07a2-9ca2-11ec-8c3c-48478ce7e2b6','e24e6f42-c259-4830-ae80-ceb8097b6d06','002e289c-9ca0-11ec-8c3c-48478ce7e2b6','PT. Multipolar','PROCESS','NEED APPROVAL','012/STO/KBL/2022','PT.M/PMT012/8185b-e24e6','SIMARU/STO/KBL/2022','mengerjakan pekerjaan 5','mengerjakan pekerjaan 5','',NULL,NULL,NULL,NULL,'8185b9ad-6e1a-4b29-9636-1ae29d41964b',1,1,2,5,NULL),(13,'45cf07a2-9ca2-11ec-8c3c-48478ce7e2b6','e24e6f42-c259-4830-ae80-ceb8097b6d06','002e289c-9ca0-11ec-8c3c-48478ce7e2b6','PT. Multipolar','PROCESS','NEED APPROVAL','013/STO/KBL/2022','PT.M/PMT013/8185b-e24e6','SIMARU/STO/KBL/2022','mengerjakan pekerjaan 7','mengerjakan pekerjaan 7','',NULL,NULL,NULL,NULL,'8185b9ad-6e1a-4b29-9636-1ae29d41964b',1,1,2,5,NULL),(14,'45cf07a2-9ca2-11ec-8c3c-48478ce7e2b6','e24e6f42-c259-4830-ae80-ceb8097b6d06','002e289c-9ca0-11ec-8c3c-48478ce7e2b6','PT. Multipolar','PROCESS','NEED APPROVAL','014/STO/KBL/2022','PT.M/PMT014/8185b-e24e6','SIMARU/STO/KBL/2022','mengerjakan pekerjaan 9','mengerjakan pekerjaan 9','',NULL,NULL,NULL,NULL,'8185b9ad-6e1a-4b29-9636-1ae29d41964b',1,1,2,5,NULL),(15,'45cf07a2-9ca2-11ec-8c3c-48478ce7e2b6','e24e6f42-c259-4830-ae80-ceb8097b6d06','002e289c-9ca0-11ec-8c3c-48478ce7e2b6','PT. Multipolar','PROCESS','NEED APPROVAL','015/STO/KBL/2022','PT.M/PMT015/8185b-e24e6','SIMARU/STO/KBL/2022','mengerjakan pekerjaan 10','mengerjakan pekerjaan 10','',NULL,NULL,NULL,NULL,'8185b9ad-6e1a-4b29-9636-1ae29d41964b',1,1,2,5,NULL),(16,'45cf07a2-9ca2-11ec-8c3c-48478ce7e2b6','e24e6f42-c259-4830-ae80-ceb8097b6d06','002e289c-9ca0-11ec-8c3c-48478ce7e2b6','PT. Multipolar','PROCESS','NEED APPROVAL','016/STO/KBL/2022','PT.M/PMT016/8185b-e24e6','SIMARU/STO/KBL/2022','mengerjakan pekerjaan 11','mengerjakan pekerjaan 11','','malakukan pekerjaan 1, melakukan pekerjaan 2, melakukan pekerjaan 3',NULL,NULL,NULL,'8185b9ad-6e1a-4b29-9636-1ae29d41964b',1,1,2,5,'2022-03-10 18:13:34'),(17,'45cf07a2-9ca2-11ec-8c3c-48478ce7e2b6','e24e6f42-c259-4830-ae80-ceb8097b6d06','002e289c-9ca0-11ec-8c3c-48478ce7e2b6','PT. Multipolar','PROCESS','NEED APPROVAL','017/STO/KBL/2022','PT.M/PMT017/8185b-e24e6','SIMARU/STO/KBL/2022','mengerjakan pekerjaan 11','mengerjakan pekerjaan 11','','malakukan pekerjaan 1, melakukan pekerjaan 2, melakukan pekerjaan 3',NULL,NULL,NULL,'8185b9ad-6e1a-4b29-9636-1ae29d41964b',1,1,2,5,'2022-03-10 18:16:38'),(18,'45cf07a2-9ca2-11ec-8c3c-48478ce7e2b6','e24e6f42-c259-4830-ae80-ceb8097b6d06','002e289c-9ca0-11ec-8c3c-48478ce7e2b6','PT. Multipolar','PROCESS','NEED APPROVAL','018/STO/KBL/2022','PT.M/PMT018/8185b-e24e6','SIMARU/STO/KBL/2022','mengerjakan pekerjaan 11','mengerjakan pekerjaan 11','','malakukan pekerjaan 1, melakukan pekerjaan 2, melakukan pekerjaan 3',NULL,NULL,NULL,'8185b9ad-6e1a-4b29-9636-1ae29d41964b',1,1,2,5,'2022-03-10 06:59:14'),(19,'45cf07a2-9ca2-11ec-8c3c-48478ce7e2b6','e24e6f42-c259-4830-ae80-ceb8097b6d06','002e289c-9ca0-11ec-8c3c-48478ce7e2b6','PT. Multipolar','PROCESS','NEED APPROVAL','019/STO/KBL/2022','PT.M/PMT019/8185b-e24e6','SIMARU/STO/KBL/2022','mengerjakan pekerjaan 11','mengerjakan pekerjaan 11','','malakukan pekerjaan 1, melakukan pekerjaan 2, melakukan pekerjaan 3',NULL,NULL,NULL,'8185b9ad-6e1a-4b29-9636-1ae29d41964b',1,1,2,5,'2022-03-10 18:59:52');
/*!40000 ALTER TABLE `permit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `kode` varchar(50) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'admin','ADM','admin roles'),(2,'teknisi','TCH','teknisi umum roles'),(3,'waspang','WSP','pengawas lapangan roles'),(4,'security','SCR','security roles');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ruangan`
--

DROP TABLE IF EXISTS `ruangan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ruangan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `location_id` int(11) DEFAULT NULL,
  `lantai_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `location_id` (`location_id`),
  KEY `lantai_id` (`lantai_id`),
  CONSTRAINT `ruangan_ibfk_1` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`),
  CONSTRAINT `ruangan_ibfk_2` FOREIGN KEY (`lantai_id`) REFERENCES `lantai` (`id`),
  CONSTRAINT `ruangan_ibfk_3` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`),
  CONSTRAINT `ruangan_ibfk_4` FOREIGN KEY (`lantai_id`) REFERENCES `lantai` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruangan`
--

LOCK TABLES `ruangan` WRITE;
/*!40000 ALTER TABLE `ruangan` DISABLE KEYS */;
INSERT INTO `ruangan` VALUES (1,'R. OLT',1,1),(2,'R. DBD',1,1),(3,'R. MGM',1,2),(4,'R. MMG',1,2),(5,'R. NGN',1,3),(6,'R. NGA',1,3),(7,'R. OLT',2,1),(8,'R. DBD',2,1),(9,'R. MGM',2,2),(10,'R. MMG',2,2),(11,'R. NGN',3,1),(12,'R. NGA',3,1),(13,'R. OLT',4,1),(14,'R. DBD',4,1),(15,'R. MGM',4,2);
/*!40000 ALTER TABLE `ruangan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teknisi_auth`
--

DROP TABLE IF EXISTS `teknisi_auth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teknisi_auth` (
  `id` varchar(36) NOT NULL,
  `teknisi_data_id` varchar(36) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `is_suspend` tinyint(1) DEFAULT NULL,
  `auth_token` text,
  `access_token` text,
  `refresh_token` text,
  `otp` varchar(6) DEFAULT NULL,
  `is_otp` tinyint(1) DEFAULT NULL,
  `is_email_verified` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `created_by` varchar(200) DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  `update_by` varchar(200) DEFAULT NULL,
  `player_ids` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone` (`phone`),
  UNIQUE KEY `user_name` (`user_name`),
  KEY `teknisi_data_id` (`teknisi_data_id`),
  CONSTRAINT `teknisi_auth_ibfk_1` FOREIGN KEY (`teknisi_data_id`) REFERENCES `teknisi_data` (`id`),
  CONSTRAINT `teknisi_auth_ibfk_2` FOREIGN KEY (`teknisi_data_id`) REFERENCES `teknisi_data` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teknisi_auth`
--

LOCK TABLES `teknisi_auth` WRITE;
/*!40000 ALTER TABLE `teknisi_auth` DISABLE KEYS */;
INSERT INTO `teknisi_auth` VALUES ('085dab33-702a-48eb-84cb-31864c884f26','f7d891aa-0369-4347-bdc8-0a4a515f6857','handoko@gmail.com','089515500006','hando88','$2b$12$t5iXBiCBVQCnd/c77C0NJe8CSvCFyY0zPeLzhqM/2NtNtoSZMtwsC',0,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiVTJGc2RHVmtYMTk3RW1FUmtJaXArMnM5ZWV2a1dpcmVUYkt6Y3I5QTRaa0NWV0wyUEZ3MmlNbDZadVZzbXBheWlmVVlwYUp4MkdCSklCOEJqTkpUY0VkK3F4THdWME9mOFB3a29ldWU0a009IiwiaWF0IjoxNjQ2NzA3NDQ3LCJleHAiOjE2NDY3MTEwNDcsImF1ZCI6IkFudWJpcy1XZWItQXBwIiwiaXNzIjoiTS1BbnViaXMtQmFja2VuZCIsInN1YiI6IkFudWJpcy1BcGktVjEifQ.oujrHAKbbe-GWJa4cZKzj4Hz-QAwoRnSA7v7Cj1d_4Q','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiVTJGc2RHVmtYMThUZjZVRUxxSC95QU1UUzNJclgweWJ5WlRrZGJ4MnhYWmdudmNjV1E2d1l4TkJZejJsYjVYUXJMUldEZnU4Wk5KT0pKTTVTdVF0eFVBeEpNNjY5MmdiWHJlTWRJQ1pYZ2s9IiwiaWF0IjoxNjQ2NzA3NDQ3LCJleHAiOjE2NDY3MjU0NDcsImF1ZCI6IkFudWJpcy1XZWItQXBwIiwiaXNzIjoiTS1BbnViaXMtQmFja2VuZCIsInN1YiI6IkFudWJpcy1BcGktVjEifQ.SouwkOXXpMMic6Zhb98lI9pMoSoVlMS5ebKmfyUUPq0','392567',1,0,'2022-03-08 02:44:07',NULL,'2022-03-08 02:44:07',NULL,NULL),('2207c2c0-9d09-11ec-8c3c-48478ce7e2b6','8185b9ad-6e1a-4b29-9636-1ae29d41964b','joko@gmail.com','089515500001','joko88','$2b$12$8ebYNZiANgGeIPWqFke1beSvc00WDNKBbf94D8iaA7BWdBAZHQMCy',0,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiVTJGc2RHVmtYMSs1SHRrN3VGSDVxeUdOc0RGR2h6RFB1alRMYUltU0Y1Yk1ETVBPUWh6NmdMZyt4dElwRzdIeVlFTnhldE1NUHVvY0sxanR6VE1mWUE9PSIsImlhdCI6MTY0Njc1MTU0MSwiZXhwIjoxNjQ2NzU1MTQxLCJhdWQiOiJBbnViaXMtV2ViLUFwcCIsImlzcyI6Ik0tQW51YmlzLUJhY2tlbmQiLCJzdWIiOiJBbnViaXMtQXBpLVYxIn0.r0SLSON0xZI9tbzWM9Fgh4-FY5j0p0BcbMvmsuRPtlw','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiVTJGc2RHVmtYMS82WXF2ZGh3TE9QMExiM2lHQmY2bG5xSzJXMmY2TW1rQWw2ajI1QXExVklNODJWL1g2eDV3TUFycnhsSHR2SXB1RUVDSXRiZ1JoZUE9PSIsImlhdCI6MTY0Njc1MTU0MSwiZXhwIjoxNjQ5MzQzNTQxLCJhdWQiOiJBbnViaXMtV2ViLUFwcCIsImlzcyI6Ik0tQW51YmlzLUJhY2tlbmQiLCJzdWIiOiJBbnViaXMtQXBpLVYxIn0.x5Cjv2Vpwj7uKqXCTCyeSYTlh82UuekV58azd-UghBE','594004',1,0,'2022-03-06 04:51:49',NULL,'2022-03-06 04:51:49',NULL,'40c262fc-9c86-11ec-a373-b686ce070935'),('4dc8a352-9d09-11ec-8c3c-48478ce7e2b6','e24e6f42-c259-4830-ae80-ceb8097b6d06','bam@gmail.com','089515500002','bam88','$2b$12$J3UjgnlQj4bJ8MSLQQ/72OghNO64cY54cBlxR6z7GCBoRSsUG681O',0,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiVTJGc2RHVmtYMTk1ZFMyYXo4K3JzTmVKb04rcjBoTGRrYklvbWNyZ1M1Z3VpZ1BZcFQzY200ZXVUMmtIbnQwTU5JREp4bFFWQTRET3RBTEJUak5yeUE9PSIsImlhdCI6MTY0NjU0MjM4MiwiZXhwIjoxNjQ2NTQ1OTgyLCJhdWQiOiJBbnViaXMtV2ViLUFwcCIsImlzcyI6Ik0tQW51YmlzLUJhY2tlbmQiLCJzdWIiOiJBbnViaXMtQXBpLVYxIn0.lV4elDp2p8OMcn8H4LmR5KxzAQXiGbiL7YH2V8Yvqes','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiVTJGc2RHVmtYMStxdUJZR25Wb0NoM2prQ1EwL0ZWcFBMV3U5S1kwdFpNZ0d4QVJzSzQyQkZ2WkdVckZJcG0rRGEzaDQxazRCUTN1T29Bdmd1cmd5OUE9PSIsImlhdCI6MTY0NjU0MjM4MiwiZXhwIjoxNjQ5MTM0MzgyLCJhdWQiOiJBbnViaXMtV2ViLUFwcCIsImlzcyI6Ik0tQW51YmlzLUJhY2tlbmQiLCJzdWIiOiJBbnViaXMtQXBpLVYxIn0.sSlo1mvi5bZyItWy-mCsRqOEPmavD_hvwR2KneQv7M0','553675',1,0,'2022-03-06 04:53:02',NULL,'2022-03-06 04:53:02',NULL,NULL),('d3b12632-35f3-45c4-a6f4-9baa1abc325c','890dab8d-ca1e-4fd5-a876-cf9768cf7a3d','widodo@gmail.com','089515500005','wido99','$2b$12$uTnm.ET6htCJ2truq7U.f.8odYslsnAeVof4WFMLlhJJ6Va2tCk8m',0,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiVTJGc2RHVmtYMS9jSWExbk00Q3FJVW44clhZUjFxSnRWTnJqVjFyUFNxMkZoK3B3bUd6MDhrNjN3QWp4RTZ1UkUybVBaN2xPSDI3WmF4Wkh4U1Y0OWc9PSIsImlhdCI6MTY0NjY2NTEzNiwiZXhwIjoxNjQ2NjY4NzM2LCJhdWQiOiJBbnViaXMtV2ViLUFwcCIsImlzcyI6Ik0tQW51YmlzLUJhY2tlbmQiLCJzdWIiOiJBbnViaXMtQXBpLVYxIn0.gAOnxlw6Zqaxzk1mSYOgbrqGklX3LPgIKr_oOisnqx8','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiVTJGc2RHVmtYMS9DTlVWMTJhRUI2QnZza2JDSzU0Q3BGa0pnc3J3SmQ5TkhzSWhRK1VUSS9tbGlCb3Qrd3JVNjVwT3c5LzNFa1IxcUtRQ0RXTWI0alRFdlBFcFZ2MFlISE1lWnMyWDdQZWs9IiwiaWF0IjoxNjQ2NjY1MTM2LCJleHAiOjE2NDY2ODMxMzYsImF1ZCI6IkFudWJpcy1XZWItQXBwIiwiaXNzIjoiTS1BbnViaXMtQmFja2VuZCIsInN1YiI6IkFudWJpcy1BcGktVjEifQ.OjKeYytQEXpNmIzSuMYczS8wLw4ZKcuQEWg3V4MnIio','311610',1,0,'2022-03-07 14:58:56',NULL,'2022-03-07 14:58:56',NULL,NULL);
/*!40000 ALTER TABLE `teknisi_auth` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teknisi_data`
--

DROP TABLE IF EXISTS `teknisi_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teknisi_data` (
  `id` varchar(36) NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `vendor_id` varchar(36) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `job_desc` text,
  PRIMARY KEY (`id`),
  KEY `role_id` (`role_id`),
  KEY `vendor_id` (`vendor_id`),
  CONSTRAINT `teknisi_data_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`),
  CONSTRAINT `teknisi_data_ibfk_3` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`id`),
  CONSTRAINT `teknisi_data_ibfk_5` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`),
  CONSTRAINT `teknisi_data_ibfk_6` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teknisi_data`
--

LOCK TABLES `teknisi_data` WRITE;
/*!40000 ALTER TABLE `teknisi_data` DISABLE KEYS */;
INSERT INTO `teknisi_data` VALUES ('8185b9ad-6e1a-4b29-9636-1ae29d41964b',2,'002e289c-9ca0-11ec-8c3c-48478ce7e2b6','joko sutoyo',NULL,NULL),('890dab8d-ca1e-4fd5-a876-cf9768cf7a3d',2,'002e289c-9ca0-11ec-8c3c-48478ce7e2b6','widodo salmon',NULL,NULL),('e24e6f42-c259-4830-ae80-ceb8097b6d06',3,'002e289c-9ca0-11ec-8c3c-48478ce7e2b6','bambang suseno',NULL,NULL),('f7d891aa-0369-4347-bdc8-0a4a515f6857',2,'002e289c-9ca0-11ec-8c3c-48478ce7e2b6','handoko suryo',NULL,NULL);
/*!40000 ALTER TABLE `teknisi_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token`
--

DROP TABLE IF EXISTS `token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(200) DEFAULT NULL,
  `status_token` varchar(100) DEFAULT NULL,
  `permit_id` int(11) DEFAULT NULL,
  `location_id` int(11) DEFAULT NULL,
  `teknisi_auth_id` varchar(36) DEFAULT NULL,
  `vendor_id` varchar(36) DEFAULT NULL,
  `vendor` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `permit_id` (`permit_id`),
  KEY `location_id` (`location_id`),
  KEY `vendor_id` (`vendor_id`),
  KEY `teknisi_auth_id` (`teknisi_auth_id`),
  CONSTRAINT `token_ibfk_1` FOREIGN KEY (`permit_id`) REFERENCES `permit` (`id`),
  CONSTRAINT `token_ibfk_10` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`id`),
  CONSTRAINT `token_ibfk_11` FOREIGN KEY (`permit_id`) REFERENCES `permit` (`id`),
  CONSTRAINT `token_ibfk_12` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`),
  CONSTRAINT `token_ibfk_13` FOREIGN KEY (`teknisi_auth_id`) REFERENCES `teknisi_auth` (`id`),
  CONSTRAINT `token_ibfk_14` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`id`),
  CONSTRAINT `token_ibfk_15` FOREIGN KEY (`teknisi_auth_id`) REFERENCES `teknisi_auth` (`id`),
  CONSTRAINT `token_ibfk_2` FOREIGN KEY (`teknisi_auth_id`) REFERENCES `teknisi_auth` (`id`),
  CONSTRAINT `token_ibfk_3` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`id`),
  CONSTRAINT `token_ibfk_4` FOREIGN KEY (`permit_id`) REFERENCES `permit` (`id`),
  CONSTRAINT `token_ibfk_5` FOREIGN KEY (`teknisi_auth_id`) REFERENCES `teknisi_auth` (`id`),
  CONSTRAINT `token_ibfk_6` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`id`),
  CONSTRAINT `token_ibfk_7` FOREIGN KEY (`permit_id`) REFERENCES `permit` (`id`),
  CONSTRAINT `token_ibfk_8` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`),
  CONSTRAINT `token_ibfk_9` FOREIGN KEY (`teknisi_auth_id`) REFERENCES `teknisi_auth` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
/*!40000 ALTER TABLE `token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor`
--

DROP TABLE IF EXISTS `vendor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor` (
  `id` varchar(36) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor`
--

LOCK TABLES `vendor` WRITE;
/*!40000 ALTER TABLE `vendor` DISABLE KEYS */;
INSERT INTO `vendor` VALUES ('002e289c-9ca0-11ec-8c3c-48478ce7e2b6','PT. Multipolar'),('05f613d4-9ca0-11ec-8c3c-48478ce7e2b6','PT. OPMC'),('f0496040-9c9f-11ec-8c3c-48478ce7e2b6','PT. Telkom Akses');
/*!40000 ALTER TABLE `vendor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-10 19:19:04
