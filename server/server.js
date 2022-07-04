const express = require("express");
const app = express();
app.use(express.json())
const port = process.env.PORT || 4444;
const data = [
    {
        prod_id: 1,
        prod_name: "rice",
        prod_desctiption:"Enter the description",
        image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMHJpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        price: 3.99
    },
    {
        prod_id: 2,
        prod_name: "pasta",
        prod_desctiption: "Enter the description",
        image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMHJpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        price: 4.99
    },
    {
        prod_id: 3,
        prod_name: "cookie",
        prod_desctiption: "Enter the description",
        image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMHJpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        price: 5.99
    },
    {
        prod_id: 4,
        prod_desctiption: "Enter the description",
        prod_name: "caffe",
        image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMHJpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        price: 6.99
    }
]
// GET "/"
app.get("/", (req, res) => {
    res.send(data);
});
//Get by id
app.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const filteredProduct = data.filter((product)=> product.prod_id === id)
    res.send(filteredProduct);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
