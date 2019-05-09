CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger(
  id INT(10) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(100) NOT NULL,
  eaten BOOLEAN default false,
  PRIMARY KEY(id)
);