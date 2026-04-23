const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,       
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

pool.connect((err, client, release) => {
  if (err) {
    console.log('Erreur de connexion à la Base de Données :', err);
  } else {
    console.log('Connexion avec la Base de données établie !');
    release();
  }
});