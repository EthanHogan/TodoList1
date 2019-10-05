DROP DATABASE IF EXISTS TodosDB;

CREATE DATABASE TodosDB;

USE TodosDB;

CREATE TABLE Todos (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  todo VARCHAR(255) NOT NULL
);