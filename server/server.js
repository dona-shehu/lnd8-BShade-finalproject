const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());


app.use(express.json())
const cors = require('cors');
app.use(cors()) 


const port = process.env.PORT || 4444;


const { Pool } = require('pg');


const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    } 
})

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
