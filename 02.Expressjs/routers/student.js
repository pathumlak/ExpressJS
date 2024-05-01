import express from 'express';
import {
    allstudents, 
    newstudents, 
    updatestudents, 
    deletestudents

} from '../controls/student.js'


const router =  express.Router();


router.get('/all',allstudents )
router.post('/create',newstudents)
router.put('/update', updatestudents)
router.delete('/delete', deletestudents)



export default router;