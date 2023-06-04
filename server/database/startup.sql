CREATE DATABASE IF NOT EXISTS aldeia_senai;
USE aldeia_Senai;

CREATE TABLE IF NOT EXISTS `aldeia_senai`.`users` (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL
);

select * from users;