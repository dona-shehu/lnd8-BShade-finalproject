
drop table if exists user;
drop table if exists seller;
drop table if exists products;
drop table if exists categories;



CREATE TABLE categories(
  id 	 SERIAL PRIMARY KEY,
  name   VARCHAR(30)		
);
 
 CREATE TABLE seller(
    id        SERIAL PRIMARY KEY,
    name      VARCHAR(50) NOT NULL,
    location  VARCHAR(50) NOT NULL,
    logo  	  VARCHAR(3000) NOT NULL,
    description TEXT,
    registration_date DATE NOT NULL,
    email     VARCHAR(25) NOT NULL
);


CREATE TABLE products (
  id       SERIAL PRIMARY KEY,
  name     VARCHAR(30) NOT NULL,
  sell_id  INT REFERENCES seller(id),
  quantity INT NOT NULL,
  description TEXT,
  country  	VARCHAR(30),
  price     DECIMAL NOT NULL,
  cat_id    INT REFERENCES categories(id),
  image  	VARCHAR(3000) NOT NULL
);


CREATE TABLE users (
    id       SERIAL PRIMARY KEY,
    name     VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    email    VARCHAR(25) NOT NULL
);

INSERT INTO categories( name) VALUES ('food'), ('drink'), ('clothes'), ('fruits_vegetable');


//Mexican 
INSERT INTO products (name, quantity, description, country, price, image, cat_id) VALUES ('Mister Free`d Tortilla Chips Avocado & Guacamole 135G',10,'Tortilla Chips with Avocado Tastee Delicioso Sabor Mexicano! Gently roasted for a crispy bite and generously sized to fit all your favorite dips.Veegan
We believe that plant-based eating will change the world, and we want our delicious snacks to lead the way.Friendlee We only use carefully selected ingredients. No added nasties!Packaged in a protective atmosphere.Source of FibreGluten-FreeNon-GMOSuitable for Vegans Pack size: 135G', 'Mexico', 1.75, 'https://digitalcontent.api.tesco.com/v2/media/ghs/5a789bbb-a817-4c6f-a69b-f93ee810737f/dde5269f-7c0b-4f02-80f0-367c673192a8_1714628850.jpeg?h=540&w=540', 1);






INSERT INTO products (name, quantity, description, country, price, image) VALUES ('Ben`s Original Mexican Style Microwave Rice 250G',12,'Steamed parboiled long grain rice with jalapeno peppers and red peppers with Mexican style spices.
Visit BensOriginal.co.uk or BensOriginal.ie to find out more.', 'Mexico', 1.25, 'https://digitalcontent.api.tesco.com/v2/media/ghs/a5c1a10e-a816-47a3-94a8-3080922d5008/20a73c85-4764-466a-b18d-656e48f14de9_1234694007.jpeg?h=540&w=540');





INSERT INTO products (name, quantity, description, country, price, image) VALUES ('Old El Paso 12 Taco Shells 156G',2,'12 Crunchy Corn Taco Shells.
Find More Recipes Online:
http://www.oldelpaso.co.uk
©General Mills
Preservative Free
Suitable for Vegetarians
Pack size: 156', 'Mexico', 1.45, 'https://digitalcontent.api.tesco.com/v2/media/ghs/c331319e-fd7c-404a-935b-e2b31947e666/234faba3-4de2-4c84-b58b-feaa8fdfdbf3_1693755233.jpeg?h=540&w=540');







INSERT INTO products (name, quantity, description, country, price, image) VALUES ('Maggi So Juicy Mexican Chicken 40G',3,'Seasoning Mix for Mexican Chicken.
For other authentic & delicious meal ideas go to maggi.co.uk
Good to remember
Portions should be adjusted for children of different ages.
Maggi® Juicy Mexican Chicken makes it easy to prepare a delicious Mexican Chicken meal in the oven, that the whole family will love. The delicious mix of herbs and spices including red pepper, cumin and oregano, in our special Juicy cooking bag allows your chicken* to cook until tender in its own juices. The effortless way to make a tasty Juicy Mexican Chicken meal with no mess or stress!
To make a 2 of your 5 a day meal, why not make your Mexican Chicken with pepper, red onion and sweetcorn rice. For the recipe visit maggi.co.uk
*chicken not included
A juicy chicken recipe mix with a special cooking bag
No need to add oil
Sweet & Spicy
No artificial colours, flavours or preservatives
Pack size: 40G', 'Mexico', 0.69, 'https://digitalcontent.api.tesco.com/v2/media/ghs/b80d1689-5580-4047-83de-4e6863b7bfa0/8ec547f0-fdab-402b-87aa-1f4e91961c0e.jpeg?h=540&w=540');


INSERT INTO products (name, quantity, description, country, price, image) VALUES ('Herdez Salsa Casera 240G',4,'Tomato and Coriander Salsa with Chilli Peppers
Developed by Herdez, a Mexican family business with over 100 years of experience making authentic Mexican food.
Try our different flavours
Mexico`s Favourite Salsa
Chilli rating - Medium - 2
No artificial colours and flavourings
Suitable for vegetarians
Pack size: 240G', 'Mexico', 2.50, 'https://digitalcontent.api.tesco.com/v2/media/ghs/70df78a4-7a23-4323-92e3-ca84a6849949/83fbb33c-573b-42f1-b619-0c05de763ac2_1594057614.jpeg?h=540&w=540');






