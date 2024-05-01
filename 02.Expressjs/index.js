import express from 'express'
const app =  express();

app.param("id", (req, res ,next, id) => {
    console.log(`id : ${id}`);
    next();

})

app.get('/user/:id' ,(req, res) =>{
    console.log("this is user id ");
    res.send("response ok")
} )

app.listen(8000, ()=> console.log("server up"))