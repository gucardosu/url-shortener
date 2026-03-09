const db = require('../config/db');
const { nanoid } = require('nanoid');

// Função para encurtar a URL
exports.shortenUrl = async (req, res) => {
    const { originalUrl } = req.body;

    if (!originalUrl) {
        return res.status(400).json({ error: 'A URL original é obrigatória.' });
    }

    
    try {
        new URL(originalUrl);
    } catch {
        return res.status(400).json({ error: 'URL original inválida.' });
    }

    try {
        const shortCode = nanoid(6); // Gera um código de 6 caracteres
        const query = 'INSERT INTO urls (original_url, short_code) VALUES ($1, $2) RETURNING *';
        const values = [originalUrl, shortCode];

        const result = await db.query(query, values);

        res.status(201).json({
            message: 'URL encurtada com sucesso!',
            shortUrl: `http://localhost:3000/${shortCode}` 
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao salvar no banco de dados.' });
    }
};

// Função para redirecionar
exports.redirectUrl = async (req, res) => {
    const { code } = req.params;

    try {
        const query = 'SELECT original_url FROM urls WHERE short_code = $1';
        const result = await db.query(query, [code]);

        if (result.rows.length > 0) {
            return res.redirect(result.rows[0].original_url); 
        } else {
            return res.status(404).json({ error: 'URL não encontrada.' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro no servidor.' });
    }
};
