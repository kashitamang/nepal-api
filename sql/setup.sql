-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS castes;
DROP TABLE IF EXISTS districts;
DROP TABLE IF EXISTS exports;
DROP TABLE IF EXISTS flowers;
DROP TABLE IF EXISTS religions;

--castes
CREATE TABLE castes (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    meaning VARCHAR
);

INSERT INTO castes (name, meaning) VALUES 
    ('Tamang', 'Horse Warrior'),
    ('Rai', 'Land Cultivator'),
    ('Sherpa', 'Eastern People');

--districts
CREATE TABLE districts (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    population VARCHAR
);

INSERT INTO districts (name, population) VALUES 
    ('Gorkha', '271,061'),
    ('Kathmandu', '1,744,240'),
    ('Pokhara', '2,413,907');

--exports
CREATE TABLE exports (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    type VARCHAR,
    revenue_2020 VARCHAR
);

INSERT INTO exports (type, revenue_2020) VALUES 
    ('soybean oil', '$198M'),
    ('synthetic staple fivers yarn', '$53.5M'),
    ('nutmeg, mace, and cardamoms', '$48.4M');

--flowers
CREATE TABLE flowers (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    color VARCHAR
);

INSERT INTO flowers (name, color) VALUES 
    ('Himalayan Aster', 'blue'),
    ('Poinsetta', 'red'),
    ('Rhododendron', 'varying');

    --religions
CREATE TABLE religions (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    type VARCHAR,
    percentage_2011 VARCHAR
);

INSERT INTO religions (type, percentage_2011) VALUES 
    ('Hinduism', '81.3%'),
    ('Buddhism', '9.04%'),
    ('Islam', '4.39%');
