const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'backsakila',
    port: 3306
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conexión a la base de datos establecida');
});

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Obtener todos los actores
app.get('/actors', (req, res) => {
    const sql = 'SELECT * FROM actor';
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send('Error al obtener actores');
        } else {
            res.send(result);
        }
    });
});

// Obtener actor por ID
app.get('/actors/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM actor WHERE actor_id = ?';
    db.query(sql, id, (err, result) => {
        if (err) {
            res.status(500).send('Error al obtener actor por ID');
        } else {
            res.send(result);
        }
    });
});

// Crear actor nuevo
app.post('/actors', (req, res) => {
    const { first_name, last_name } = req.body;
    const sql = 'INSERT INTO actor (first_name, last_name) VALUES (?, ?)';
    db.query(sql, [first_name, last_name], (err, result) => {
        if (err) {
            res.status(500).send('Error al añadir actor');
        } else {
            res.send('Actor añadido correctamente');
        }
    });
});

// Actualizar actor por ID
app.put('/actors/:id', (req, res) => {
    const id = req.params.id;
    const { first_name, last_name } = req.body;
    const sql = 'UPDATE actor SET first_name = ?, last_name = ? WHERE actor_id = ?';
    db.query(sql, [first_name, last_name, id], (err, result) => {
        if (err) {
            res.status(500).send('Error al actualizar actor por ID');
        } else {
            res.send('Actor actualizado correctamente');
        }
    });
});

// Eliminar actor por ID
app.delete('/actors/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM actor WHERE actor_id = ?';
    db.query(sql, id, (err, result) => {
        if (err) {
            res.status(500).send('Error al eliminar actor por ID');
        } else {
            res.send('Actor eliminado correctamente');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
