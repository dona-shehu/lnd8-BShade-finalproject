import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material"


function ProductPage() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://hujreh.herokuapp.com/inventory");
    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    <Box sx={{ flexGrow: 1, margin: 2 }}>
      <Grid
        container
        spacing={{ xs: 3, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {items.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <Link to={`/productpage/${item.id}`}>
                <CardMedia
                  component="img"
                  height="140"
                  src={item.image}
                  alt="rice"
                />
              </Link>
              <CardContent>
                <Link to={`/productpage/${item.id}`}>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name.toUpperCase()}
                  </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary">
                  Rice is the seed of the grass species Oryza sativa or less
                  commonly Oryza glaberrima. The name wild rice is usually used
                  for species of the genera Zizania.
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small">Add to cart</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    // <div>
    //   {items.map((item) => (
    //     <div key={item.prod_id}>
    //       <h4>
    //         <Link to={`/productpage/${item.prod_id}`}> {item.prod_name} </Link>
    //       </h4>
    //       <Link to={`/productpage/${item.prod_id}`}>
    //         <img src={item.image} alt="" />
    //       </Link>
    //     </div>
    //   ))}
    // </div>
  );
}

export default ProductPage;
