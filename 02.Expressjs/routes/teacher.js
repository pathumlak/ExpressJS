//import express 
import express from 'express';

const router  = express.Router()


router.get('/all', (req, res) =>{
    res.send("all Teachers")
})
router.post('/create', (req, res) =>{
    res.send("create a new Teachers")
})
router.put('/update', (req, res) =>{
    res.send("update  Teachers")
})
router.delete('/delete', (req, res) =>{
    res.send("delete Teachers")
})

export default router;