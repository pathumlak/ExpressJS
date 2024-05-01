import express from "express";

const app =  express();
console.clear();

//qury string ? 
app.get('/product' , (req, res) =>{
   const {category, id } = req.query

   res.send(`product category is : ${category} and id is: ${id}`)//localhost:8000/product?category=iphone&id=15
   //outpur-> product category is : iphone

})

app.listen(8000, ()=> console.log("server up"))