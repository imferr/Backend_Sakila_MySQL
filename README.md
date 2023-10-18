# BACKEND Sakila con MySQL y Express (NodeJS)

<div align="center">
    <img src="https://www.bairesdev.com/wp-content/uploads/2021/07/Expressjs.svg" width="200px">
    <img src="https://hoplasoftware.com/wp-content/uploads/2021/07/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png" width="200px">
</div>

## Instrucciones

Para hacer correr este backend es necesario tener instalado NodeJS y MySQL.
Primero se realiza la creacion del contenedor de Docker con la base de datos de Sakila.

1. Descargar la imagen de MySQL:

    ```bash
    docker pull mysql
    ```

2. Crear el contenedor de Docker con la imagen de MySQL, con el puerto 5432 expuesto:

    ```bash
    docker run --name sakila -e MYSQL_ROOT_PASSWORD=1234 -p 5432:5432 -d mysql
    ```

3. Acceder a la base de datos de MySQL:

    ```bash
    docker exec -it sakila mysql -p
    ```

4. Crear la base de datos de Sakila:

    ```sql
    CREATE DATABASE sakila;
    ```

5. Ingresar a la base de datos:

    ```sql
    USE sakila;
    ```

7. Crear la tabla de actores:

    ```sql
    CREATE TABLE actor (
        actor_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
        first_name VARCHAR(45) NOT NULL,
        last_name VARCHAR(45) NOT NULL,
        last_update TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (actor_id),
        KEY idx_actor_last_name (last_name)
    )ENGINE=InnoDB DEFAULT CHARSET=utf8;
    ```


