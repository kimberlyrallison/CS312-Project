-- Database: fitness_platform

DROP DATABASE IF EXISTS fitness_platform;

CREATE DATABASE fitness_platform
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- create user credential table
CREATE TABLE public.credentials
(
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);

ALTER TABLE IF EXISTS public.credentials
    OWNER to postgres;

INSERT INTO public.credentials
VALUES ('admin', 'password')