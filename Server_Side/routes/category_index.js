import express from 'express';
import Category from '../model/Category.js';
import passport from 'passport';

//Using express router
const router = express.Router();

const categoricalRoutes = (app) =>{
    //Middleware For Router
    app.use('/api/category', router);

    //- Create Category - Public API
    router.post('/create', passport.authenticate('jwt',{session: false}), async(req, res) =>{
        try {
            const model = await Category.create(req.body);
            res.send(model);
        } catch (error) {
            console.log(error);
            res.status(500).json('Server Problem');
        }
    })

    //- List_All_Categories_API-Public_API\
    router.get('/categoricalList', passport.authenticate('jwt',{session:false}), async(req, res) =>{
        try {
            const items = await Category.find().populate('parent').limit(10);
            res.send(items);
        } catch (error) {
            console.log(error);
            res.status(500).json('Server Problem');
        }
    })

    //- UpdateTask_API-Public_API
    router.put('/:id', passport.authenticate('jwt',{session:false}), async(req, res) =>{
        try {
            const model = await Category.findByIdAndUpdate(req.params.id, req.body, {new:true});
            res.send(model);
        } catch (error) {
            console.log(error);
            res.status(500).json('Server Problem');
        }
    })

    //- DeleteCategory_API-Public_API
    router.delete('/:id', passport.authenticate('jwt',{session:false}), async(req, res) =>{
        try {
            const model = await Category.findByIdAndDelete(req.params.id, req.body, {new:true});
            res.status(200).json({success: true});
        } catch (error) {
            console.log(error);
            res.status(500).json('Server Problem');
        }
    })

    //- List_ALl_UserAPI - Only for Testing-Public_API
    router.get('/categories', async (req,res) => {
        res.send(await Category.find());
    });
}

export default categoricalRoutes;
