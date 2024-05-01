//import express 
import express from 'express';

const app = express()


//http://localhost:8000/product/iphone
app.get('/product/iphone' ,(req, res) => {
    res.send("this will work only provide product/iphone")
})


app.listen(8000, ()=> console.log("server up"))
