const express = require("express");
const app = express();
app.use(express.json())
const cors = require('cors');
app.use(cors()) 


const port = process.env.PORT || 4444;


const { Pool } = require('pg');

// const pool = new Pool({
//     user: 'codeyourfuture',
//     host: 'localhost',
//     database: 'hujreh',
//     password: 'donashehu',
//     port: 5432
// }); 

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    } 
})
// export DATABASE_URL=postgres://codeyourfuture:donashehu@localhost:5432/hujreh?sslmode=disable
 
//connectionString should be encoded as follows:
//postgres://<USERNAME>:<PASSWORD>@<HOST>:<PORT>/<DB>

// To set env. variable in Linux / macOS  run these comands in terminal
// export PORT=numb_of_port
// export DATABASE_URL=postgres://<USERNAME>:<PASSWORD>@<HOST>:<PORT>/<DB>
// npm run start or npm run dev

//Connection with the DB locally In my case 
//export PORT=7777 
//export DATABASE_URL=postgres://codeyourfuture:donashehu@localhost:5432/cyf_hotels?sslmode=disable
//npm run dev


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
