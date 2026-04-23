-- Database: The Link

-- DROP DATABASE IF EXISTS "The Link";

CREATE DATABASE "The Link"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


	CREATE TABLE users (
		user_id SERIAL PRIMARY KEY,
		firstname VARCHAR (55) NOT NULL,
		lastname VARCHAR (55) NOT NULL,
		mail VARCHAR (55) NOT NULL,
		role VARCHAR (10) NOT NULL,
		mdp VARCHAR(255) NOT NULL --hash bcrypt
	),


	CREATE TABLE cards(
		card_id SERIAL PRIMARY KEY,
		sentences TEXT NOT NULL,
		people VARCHAR (55)
	)