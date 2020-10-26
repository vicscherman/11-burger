CREATE database burgers_db;

USE burgers_db;

DROP TABLE IF EXISTS `burgers`;
CREATE TABLE `burgers`(
    `id` INTEGER AUTO_INCREMENT PRIMARY KEY,
    `burger_name` VARCHAR (30),
    `devoured` BOOLEAN DEFAULT false

);