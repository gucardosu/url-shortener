const { Pool } = require('pg');
require('dotenv').config();

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL não definida no arquivo .env');
}

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => {
    console.log("Banco de dados conectado com sucesso!");
});

pool.on('error', (err) => {
    console.error('Erro inesperado no pool de conexões:', err);
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};