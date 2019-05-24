CREATE DATABASE burgers2_db;
USE burgers2_db;

CREATE TABLE burger(
  id INT(10) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(100) NOT NULL,
  eaten BOOLEAN default false,
  PRIMARY KEY(id)
);