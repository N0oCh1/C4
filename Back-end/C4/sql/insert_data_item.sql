INSERT INTO items (categoria, nombre, precio)
VALUES
("Pizza", "Pizza Pepperoni", 10.00),
("Pizza", "Pizza de Hamon", 10.00),
("Pasta", "Pasta a la carbonara", 12.00),
("Pasta", "lasadna", 12.5),
("Alcohol", "Cerveza", 4),
("Alcohol", "Vino tinto", 5.5),
("Topping", "papa fritas", 2.5),
("Topping", "Patacones",5.65);

INSERT INTO registro (password, user, user_rol)
VALUES
("admin", "admin", "user_rol");

ALTER TABLE `producto` DROP FOREIGN KEY `FK38ti4we63c57ubtu5yccyu63i`;

ALTER TABLE `producto` ADD FOREIGN KEY (`id_pedido`) REFERENCES `pedidos`(`id_pedidos`) ON UPDATE CASCADE ON DELETE CASCADE;
