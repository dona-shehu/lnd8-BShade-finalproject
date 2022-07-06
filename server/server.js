const express = require("express");
const app = express();
app.use(express.json())
const port = process.env.PORT || 4444;


const { Pool } = require('pg');

const pool = new Pool({
    user: 'codeyourfuture',
    host: 'localhost',
    database: 'hujreh',
    password: 'donashehu',
    port: 5432
});



app.get("/inventory", (req, res) => {
    pool.query('SELECT * FROM products')
        .then((result) => res.json(result.rows))
        .catch((error) => {
            console.error(error);
            res.status(500).json(error);
        })
})

app.get("/inventory/:id", (req, res) => {
    const id = req.params.id
    pool.query("SELECT * FROM products WHERE id = $1", [id])
        .then((result) => res.json(result.rows))
        .catch((error)=>{
            console.error(error)
            res.status(500).json(error)
        })
})


app.listen(port, () => console.log(`Listening on port ${port}`));
