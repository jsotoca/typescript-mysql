import { Router, Request, Response } from 'express';

const router = Router();

router.get('/heroes',(req:Request, res:Response)=>{
    res.json({
        message:'ok',
        ok:true
    })
});

router.get('/heroes/:id',(req:Request, res:Response)=>{
    const { id } = req.params;
    res.json({
        message:'ok',
        ok:true,
        id
    })
});

export default router;