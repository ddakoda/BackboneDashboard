
psql

CREATE DATABASE card;

\c card;

CREATE TABLE cards (id SERIAL PRIMARY KEY, title VARCHAR(255), message VARCHAR(255));
