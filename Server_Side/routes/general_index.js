import express from 'express';
import inflection from 'inflection';
import { model } from 'mongoose';

const router = express.Router();

const generalRoutes = (app) =>{
    //Middleware for Router
    app.use('/admin/api/rest/:resource', (req, res, next)=>{

        const modelName = inflection.classify(req.params.resource);
        req.Model = require(`../model/${modelName}`);

        next();
    }, router);

    //Create
    router.post('/', async(req, res) => {
        const model = await req.Model.create(req.body);
        res.send(model);
    })


}


export default generalRoutes;