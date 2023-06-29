CREATE DATABASE IF NOT EXISTS aldeia_senai;
USE aldeia_Senai;

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  role INT NOT NULL DEFAULT = 1
);

CREATE TABLE IF NOT EXISTS users_auth_token (
  user_id INT NOT NULL,
  token VARCHAR(500) NOT NULL,
  expiration_date DATETIME NULL,
  FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS exercises (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  description VARCHAR(999) NOT NULL,
  outputExample VARCHAR(999) NOT NULL,
  inputExample VARCHAR(999) NULL,
  proficiency INT NOT NULL,
  responses INT NULL,
  instructor_id INT NOT NULL,
  FOREIGN KEY (instructor_id) REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS student_exercises ( 
  student_id INT NOT NULL,
  exercise_id INT NOT NULL,
  status INT NOT NULL,
  PRIMARY KEY (student_id, exercise_id),
  FOREIGN KEY (student_id) REFERENCES users (id) ON DELETE CASCADE,
  FOREIGN KEY (exercise_id) REFERENCES exercises (id) ON DELETE CASCADE
);