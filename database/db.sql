DROP DATABASE IF EXISTS circ_database;
CREATE DATABASE circ_database;
USE circ_database;
CREATE TABLE perf
(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
name VARCHAR(150) NOT NULL,
description VARCHAR(400) NULL,
photo VARCHAR(250) NULL
);

INSERT INTO perf
(name, description, photo)
VALUES
('Laugh','As an adult, come and discover our irresistible clowns, between practical jokes and pranks let yourself be carried away by their joy and fall back into childhood.','pictures/31885696530_86c0148300_b.jpg'),
('Dream','Let yourself be carried away in a world where the real and the imaginary are one, in the company of our talented magicians, discover a wonderful world limited only by your imagination.','pictures/31451558993_d91c171e84_b.jpg'),
('Marvel at','Tame the untameable in the company of our tamers, between roar and razor-sharp claws, watch these fierce dragons turn into sweet kittens.','pictures/32261589485_46e70584a9_b.jpg');

CREATE TABLE artist
(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
firstname VARCHAR(100) NULL,
lastname VARCHAR(100) NOT NULL,
photo VARCHAR(250) NULL,
description VARCHAR(400) NULL,
perf_id INT NOT NULL,
FOREIGN KEY (perf_id) REFERENCES perf(id)
);

INSERT INTO artist
(firstname, lastname, photo, description, perf_id)
VALUES
('Dwayne', 'Ferguson','https://randomuser.me/api/portraits/men/83.jpg','Clown N°1',1),
('Melinda', 'Harper', 'https://randomuser.me/api/portraits/women/8.jpg','Clown N°2',1),
('Clyde', 'Carroll', 'https://randomuser.me/api/portraits/men/7.jpg','magician N°1',2),
('Joy', ' Hall', 'https://randomuser.me/api/portraits/women/35.jpg','magician N°2',2),
('Douglas', 'Gray', 'https://randomuser.me/api/portraits/men/36.jpg','dragon tamer N°1',3),
('Kristina', 'Hansen', 'https://randomuser.me/api/portraits/women/70.jpg','dragon tamer N°2',3);

