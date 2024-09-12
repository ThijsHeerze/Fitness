// db.js
const mysql = require('mysql2');
require('dotenv').config();

// Maak een pool verbinding aan
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

// Verbind en controleer of het werkt
pool.getConnection((err, connection) => {
    if (err) {
        console.error("Kan geen verbinding maken met de database:", err);
        return;
    }
    console.log("Verbonden met de database!");
    connection.release(); // Vergeet niet de verbinding terug te geven aan de pool
});

module.exports = pool;

// app.js (hoofdbestand)
const db = require('./db');

// Voorbeeldfunctie: Haal sporters op uit de database
function haalSportersOp() {
    const query = "SELECT * FROM sporters";

    db.query(query, (err, results) => {
        if (err) {
            console.error("Fout bij het ophalen van sporters:", err);
            return;
        }
        console.log("Sporters:", results);
    });
}

// Roep de functie aan om sporters op te halen
haalSportersOp();

