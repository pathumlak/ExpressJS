import express from 'express';
import data from './products.js'

const app = express();
console.clear()

app.get('/products', (req, res)=>{
   res.json(data)
})



app.listen(8000, ()=> console.log("server up"))