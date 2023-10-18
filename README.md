# BACKEND Sakila con MySQL y Express (NodeJS)

<div align="center">
    <img src="https://www.bairesdev.com/wp-content/uploads/2021/07/Expressjs.svg" width="200px">
    <img src="https://hoplasoftware.com/wp-content/uploads/2021/07/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png" width="200px">
</div>

## Documentación

La documentación de la API se encuentra en el siguiente enlace: [Documentación API](https://docs.google.com/document/d/1TtcBefMVywp3w70s1iIHIxOeuTZiR23jRsNOeNRDRC0/edit?usp=sharing)

## Instrucciones

Para hacer correr este backend es necesario tener instalado NodeJS y MySQL.
En nuestra configuración del package json tenemos el usuario y contraseña de la base de datos, por lo que es necesario crear un usuario con los siguientes datos:

-   Usuario: root
-   Contraseña: root
-   Host: localhost
-   Puerto: 3306
-   Base de datos: backsakila

Si se deseara configurar de otra manera, se debe modificar el archivo package.json.

## Base de datos

Se debe crear la base de datos backsakila y las tablas de la siguiente manera:

1. Crear la base de datos backsakila

    ```sql
    CREATE DATABASE backsakila;
    ```

2. Crear la tabla actor

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

## Ejecución

Para realizar las pruebas de las API se realizó un index.html donde se pueden ver todas las operaciones del CRUD, para poder ver el html se puede utillizar un live server o abrir el archivo index.html en el navegador. Pero para que este html funcione con el back es necsario hacerlo correr con el siguiente comando:

```bash
npm run serve
```