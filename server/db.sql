CREATE DATABASE hujreh_database CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  sell_id INT REFERENCES seller(id),
  quantity INT NOT NULL,
  description TEXT,
  country VARCHAR(30),
  price DECIMAL NOT NULL,
  cat_id INT REFERENCES categories(id),
  image VARCHAR(3000) NOT NULL
);
CREATE TABLE categories(
  id SERIAL PRIMARY KEY,
  prod_id INT REFERENCES products(id),
  drink VARCHAR(120),
  clothes VARCHAR(120),
  vegetables_fruits VARCHAR(120),
  dairy VARCHAR(120),
  meat VARCHAR(120),
);
CREATE TABLE seller(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  location VARCHAR(120) NOT NULL,
  image VARCHAR(3000),
  description TEXT,
  registration_date DATE NOT NULL,
  email VARCHAR(255) NOT NULL,
);
CREATE TABLE user(
  id SERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  location VARCHAR(120) NOT NULL,
  email VARCHAR(120) NOT NULL,
):