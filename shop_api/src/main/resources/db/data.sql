INSERT INTO TAG(content) VALUES ('cakes');
INSERT INTO TAG(content) VALUES ('muffins');
INSERT INTO TAG(content) VALUES ('cookies');
INSERT INTO TAG(content) VALUES ('brownies');
INSERT INTO TAG(content) VALUES ('kits');

INSERT INTO Products(title, price, img, description, ingredients) VALUES('Ferrero Rocher Cake',15.99, 'ferrero-rocher.jpg', 'lorem ipsum', 'lorem ipsum');
INSERT INTO Products(title, price, img, description, ingredients) VALUES('Pretty In Pink Cake', 12.99, 'pretty-in-pink.jpg', 'lorem ipsum', 'lorem ipsum');
INSERT INTO Products(title, price, img, description, ingredients) VALUES('Rainbow Cake Cake', 14.99, 'rainbow-cake.jpg', 'lorem ipsum', 'lorem ipsum');
INSERT INTO Products(title, price, img, description, ingredients) VALUES('Raspberry Ripple Cake', 21.99, 'raspberry-ripple.jpg', 'lorem ipsum', 'lorem ipsum');

INSERT INTO Products(title, price, img, description, ingredients) VALUES('Billionaire Mix Muffins',22.99, 'billionair-mix.jpg', 'lorem ipsum', 'lorem ipsum');
INSERT INTO Products(title, price, img, description, ingredients) VALUES('Classic Mix Muffins', 2.99, 'classic-cupcakes.jpg', 'lorem ipsum', 'lorem ipsum');
INSERT INTO Products(title, price, img, description, ingredients) VALUES('Vegan Selection Muffins', 3.99, 'vegan-selection.jpg', 'lorem ipsum', 'lorem ipsum');
INSERT INTO Products(title, price, img, description, ingredients) VALUES('Treat Yo Self Muffins',22.99, 'treat-yo-self-cupcakes.jpg', 'lorem ipsum', 'lorem ipsum');

INSERT INTO Products(title, price, img, description, ingredients) VALUES('Choc Chip New York Cookie Kit', 12.99, 'choc-chip-new-york-cookie-kit.jpg', 'lorem ipsum', 'lorem ipsum');
INSERT INTO Products(title, price, img, description, ingredients) VALUES('Chocolate Cupcake Baking Kit', 14.99, 'chocolate-cupcake-baking-kit.jpg', 'lorem ipsum', 'lorem ipsum');
INSERT INTO Products(title, price, img, description, ingredients) VALUES('Cookies Cream Oreo Cupcake Baking Kit', 21.99, 'cookies-cream-oreo-cupcake-baking-kit.jpg', 'lorem ipsum', 'lorem ipsum');
INSERT INTO Products(title, price, img, description, ingredients) VALUES('Double Chocolate New York Cookie Kit',15.99, 'double-chocolate-new-york-cookie-kit.jpg', 'lorem ipsum', 'lorem ipsum');
INSERT INTO Products(title, price, img, description, ingredients) VALUES('Red Velvet Cupcake Baking Kit',23.99, 'red-velvet-cupcake-baking-kit.jpg', 'lorem ipsum', 'lorem ipsum');
INSERT INTO Products(title, price, img, description, ingredients) VALUES('Vanilla Cupcake Baking Kit',22.99, 'vanilla-cupcake-baking-kit.jpg', 'lorem ipsum', 'lorem ipsum');

INSERT INTO PRODUCT_TAGS(tag_id, product_id) VALUES (1, 1);
INSERT INTO PRODUCT_TAGS(tag_id, product_id) VALUES (1, 2);
INSERT INTO PRODUCT_TAGS(tag_id, product_id) VALUES (1, 3);
INSERT INTO PRODUCT_TAGS(tag_id, product_id) VALUES (1, 4);
INSERT INTO PRODUCT_TAGS(tag_id, product_id) VALUES (2, 5);
INSERT INTO PRODUCT_TAGS(tag_id, product_id) VALUES (2, 6);
INSERT INTO PRODUCT_TAGS(tag_id, product_id) VALUES (2, 7);
INSERT INTO PRODUCT_TAGS(tag_id, product_id) VALUES (2, 8);
INSERT INTO PRODUCT_TAGS(tag_id, product_id) VALUES (5, 9);
INSERT INTO PRODUCT_TAGS(tag_id, product_id) VALUES (5, 10);
INSERT INTO PRODUCT_TAGS(tag_id, product_id) VALUES (5, 11);
INSERT INTO PRODUCT_TAGS(tag_id, product_id) VALUES (5, 12);
INSERT INTO PRODUCT_TAGS(tag_id, product_id) VALUES (5, 13);
INSERT INTO PRODUCT_TAGS(tag_id, product_id) VALUES (5, 14);

INSERT INTO Users(user_id, username, password)
    VALUES(1, 'user', '{bcrypt}$2y$12$A7x.2lPxE6YdV8ed6OYbDucRiod32wqMF9JNerE.wq4glQWaIjRnO');
INSERT INTO Users(user_id, username, password)
    VALUES(2, 'admin', '{bcrypt}$2y$12$A7x.2lPxE6YdV8ed6OYbDucRiod32wqMF9JNerE.wq4glQWaIjRnO');
INSERT INTO Users(user_id, username, password)
    VALUES(3, 'anonymous', '{bcrypt}$2y$12$iwyoZW/83Ol3N7Hx.joa3uNlTq0gaqmA6vQwblp3VzMshZuUqCmiS');

INSERT INTO Roles(role_id, value) VALUES(1, 'USER');
INSERT INTO Roles(role_id, value) VALUES(2, 'ADMIN');

INSERT INTO Users_Roles(user_id, role_id) VALUES(1, 1);
INSERT INTO Users_Roles(user_id, role_id) VALUES(2, 2);

