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

-- User Credential Table
CREATE TABLE public.credentials
(
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);

ALTER TABLE IF EXISTS public.credentials
    OWNER to postgres;

-- Add admin information
INSERT INTO public.credentials
VALUES ('admin', 'password')
    
-- Users Table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL
);
-- Workout Plans Table
CREATE TABLE workout_plans (
    plan_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),  
    workout_time DATETIME, 
    description TEXT
);

-- Badges Table

-- Meal Logging Table
CREATE TABLE wellness_log (
    wellness_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    meal_name VARCHAR(100),
    calories INT,
    weekday VARCHAR(100),
    Hours INT
);

-- Goals Table
CREATE TABLE goals (
    goal_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    goal_type VARCHAR(100),
    goal VARCHAR(100),
    target_date DATE         
);

-- Measurments Table
CREATE TABLE measurements (
    measurements_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    weight INT,
    height INT,
    age INT
);
