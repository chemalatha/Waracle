const express = require('express');
const router = new express.Router();
const Cake =require('../models/Cake');

router.post('/cakes',async (req,res)=>{
    const cake = new Cake(req.body);
    try{
        await cake.save();
        res.status(201).send(cake);
    }catch(e){
        res.status(400).send(e);
    }
});
router.get('/cakes',async (req,res)=>{
    try{
        const cakes = await Cake.find({});
        res.status(200).send(cakes);
     }catch(e){
         res.status(500).send(e);
     }
});
router.get('/cakes/:id',async (req,res)=>{
    const _id = req.params.id;
    try{
        const cake = await Cake.findOne({_id});
        if(!cake){
            return res.status(404).send();
        }
        res.status(200).send(cake);
    }catch(e){
        console.log(e);
        res.status(500).send();
    }
});
router.put('/cakes/:id',async (req,res)=>{
    const updates = Object.keys(req.body);   
    try{
        const cake = await Cake.findOne({_id:req.params.id});
        if(!cake){
            return res.status(404).send();
        }
        updates.forEach((update)=> cake[update]=req.body[update]);
        await cake.save();

        res.status(200).send(cake);
    }catch(e){
        res.status(500).send(e);
    }
});
router.delete('/cakes/:id',async (req,res)=>{
    try{
        const cake = await Cake.findOneAndDelete({_id:req.params.id});
        if(!cake){
            return res.status(404).send();
        }
        res.send(cake);
    }catch(e){
        res.status(500).send();
    }
});

module.exports = router;