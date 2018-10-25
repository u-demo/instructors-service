CREATE DATABASE inst

USE inst;

CREATE TABLE instructors (
id INT(6) NOT NULL AUTO_INCREMENT,
inst_name VARCHAR(50),
rating DECIMAL(2,1),
reviews INTEGER(7),
students INTEGER(8),
courses INTEGER(4),
photo_url VARCHAR(255),
PRIMARY KEY (id)
);

CREATE TABLE courses (
id INTEGER(6) NOT NULL AUTO_INCREMENT,
course_name VARCHAR(255),
rating DECIMAL(2,1),
reviews INTEGER(7),
lectures INTEGER(4),
num_hours INTEGER(4),
full_price DECIMAL(6,2),
disc_price DECIMAL(6,2),
photo_url VARCHAR(255),
PRIMARY KEY (id)
);

CREATE TABLE courses_inst (
inst_id INTEGER(6),
course_id INTEGER(6),
FOREIGN KEY (inst_id)
    REFERENCES instructors (id),
FOREIGN KEY (course_id)
    REFERENCES courses (id)
);