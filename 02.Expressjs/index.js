//import express 
import express from 'express';

const app = express()

app.get('/student' , (req, res) => {
    res.send("raed the students")
})
app.post('/student', (req, res) => {
    res.send("create the student")
})
app.put('/student', (req,res) =>{
    res.send("update the students")
})
app.delete('/student', (req, res)=>{
    res.send("delete student")
})

app.listen(8000, ()=> console.log("server up"))
