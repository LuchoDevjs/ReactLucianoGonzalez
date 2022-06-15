import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


function Item({personaje}) {
    const {model ,image, price, color} = personaje
  return (
    <>
    <Card sx={{ maxWidth: 340 }} style={{margin: '13px', width: '15%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          src= {image}
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {model}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Precio: {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Color: {color}
          </Typography>   
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" style={{color:'rgb(31 60 174)', textAlign:'center'}}>
         Ver mas detalles
        </Button>
      </CardActions>
    </Card>
   
    </>
  )
}
export default Item;