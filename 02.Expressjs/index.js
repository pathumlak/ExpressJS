//import express 
import express from 'express';

const app = express()


app.get('/',(req, res) => {
    res.send("welcome to express js") // browse the localhost:8000 , you can read this
})

app.listen(8000, ()=> console.log("server up"))
