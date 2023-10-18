# BACKEND Sakila con MySQL y Express (NodeJS)

<div align="center">
    <img src="https://www.bairesdev.com/wp-content/uploads/2021/07/Expressjs.svg" width="200px">
    <img src="https://hoplasoftware.com/wp-content/uploads/2021/07/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png" width="200px">
</div>

## Instrucciones


Crear la tabla de actores:

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
