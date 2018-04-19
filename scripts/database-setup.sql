-- Create Database like the server one
CREATE DATABASE IF NOT EXISTS db167074_42;

-- Use silent-wars database
USE db167074_42;

-- Basic table structure
CREATE TABLE IF NOT EXISTS accounts (
	id INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
	username VARCHAR(30),
	email VARCHAR(255),
	lastLogin INT(11),
	protection INT(11)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS pidaid (
	aid INT(11) PRIMARY KEY NOT NULL,
	pid INT(11) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS pidpaw (
	pid INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
	paw VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS buildings (
	userId INT(11) PRIMARY KEY NOT NULL,
	buildingId INT(11),
	level INT(11),
	hitpoints INT(11)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS settings (
	userId INT(11) PRIMARY KEY NOT NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS mines (
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
	userId INT(11) NOT NULL,
	workers INT(11),
	mineType INT(11),
	duration INT(11),
	start INT(11),
	yield INT(11)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS orders (
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
	userId INT(11) NOT NULL,
	facility INT(11),
	duration INT(11),
	start INT(11),
	amount INT(11)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS alliance (
	userId INT(11) PRIMARY KEY NOT NULL,
	allianceId INT(11),
	role INT(11),
	joined INT(11)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS market (
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
	userId INT(11) NOT NULL,
	wantedType INT(11),
	wantedAmount INT(11),
	offeredType INT(11),
	offeredAmount INT(11)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS resources (
	userId INT(11) PRIMARY KEY NOT NULL,
	iron INT(11),
	silver INT(11),
	gold INT(11)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS units (
	userId INT(11) PRIMARY KEY NOT NULL,
	workers INT(11),
	soldiers INT(11),
	rocketeers INT(11),
	tanks INT(11),
	tigertanks INT(11),
	engineers INT(11)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS country (
	userId INT(11) PRIMARY KEY NOT NULL,
	size INT(11),
	used INT(11),
	continent INT(11),
	x INT(11),
	y INT(11)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS research (
	userId INT(11) PRIMARY KEY NOT NULL,
	ironMining INT(11),
	silverMining INT(11),
	coining INT(11),
	espionage INT(11)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS stats (
	userId INT(11) PRIMARY KEY NOT NULL,
	points INT(11),
	general INT(11),
	allianceId INT(11)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS wars (
	id INT(11) PRIMARY KEY NOT NULL,
	attackerId INT(11),
	defenderId INT(11),
	start INT(11),
	duration INT(11),
	warType INT(11),
	soldiers INT(11),
	rocketeers INT(11),
	tanks INT(11),
	tigertanks INT(11),
	engineers INT(11)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS messages (
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
	senderId INT(11) NOT NULL,
	receiverId INT(11) NOT NULL,
	message VARCHAR(255),
	title VARCHAR(100),
	timestamp INT(11)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS tees (
	too INT(11) PRIMARY KEY,
	tee VARCHAR(255) UNIQUE,
	taa VARCHAR(255)
) ENGINE=InnoDB;

-- History table to know about changes to the database
CREATE TABLE IF NOT EXISTS history (
	id INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
	author VARCHAR(255),
	script VARCHAR(255),
	description VARCHAR(255)
) ENGINE=InnoDB;

-- Add first entry to the history
INSERT INTO history (
	author,
	script,
	description
) VALUES (
	"luketep",
	"scripts/database-setup.sql",
	"basic setup script"
);