2021-2 OpenSoftwarePlatform TodoAPP 
1871050 Suhyun Jeong
1881034 Sumin Jang
1415023 jiyoon namgoong
1511186 Sohyeon Cho Readme update

node server.js로 벡엔드 실행. 
mysql 사용.

CREATE DATABASE  todo_db default CHARACTER SET UTF8;

create user team14@localhost identified by 'team14';
grant all privileges on todo_db .* to team14@localhost;

EXIT;

mysql -u team14 -p USE  todo_db;

CREATE TABLE user (id VARCHAR(100) PRIMARY KEY, name VARCHAR(100) NOT NULL, password VARCHAR(100) NOT NULL) ENGINE=INNODB; 

alter user 'team14'@'%' identified with mysql_native_password by 'team14';
 UPDATE mysql.user SET Host='%' WHERE Host='localhost' AND User='team14';

--> user table에 level column 붙일 예정
