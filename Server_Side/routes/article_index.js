import express from 'express';
import Article from '../model/Article.js';
import passport from 'passport';

//Using express router
const router = express.Router();

const articalRoutes = (app) =>{
    //Middleware For Router
    app.use('/api/article', router);

    //- Create Article - Public API
    router.post('/create', passport.authenticate('jwt',{session: false}), async(req, res) =>{
        try {
            const {id} = req.user;
            const newArticle = new Article({...req.body, userId:id});
            const saveArticle = await newArticle.save();
            res.status(200).json({
                newArticle: saveArticle
            });
        } catch (error) {
            console.log(error);
            res.status(500).json('Server Problem');
        }
    })

    //- List_All_Articles_API-Public_API\
    router.get('/articleList', passport.authenticate('jwt',{session:false}), async(req, res) =>{
        try {
            const items = await Article.find().limit(10);
            res.send(items);
        } catch (error) {
            console.log(error);
            res.status(500).json('Server Problem');
        }
    })

    //- UpdateArticle_API-Public_API
    router.put('/:id', passport.authenticate('jwt',{session:false}), async(req, res) =>{
        try {
            const model = await Article.findByIdAndUpdate(req.params.id, {...req.body}, {new:true});
            res.send(model);
        } catch (error) {
            console.log(error);
            res.status(500).json('Server Problem');
        }
    })

    //- DeleteArticle_API-Public_API
    router.delete('/:id', passport.authenticate('jwt',{session:false}), async(req, res) =>{
        try {
            const model = await Article.findByIdAndDelete(req.params.id, {...req.body}, {new:true});
            res.status(200).json({success: true});
        } catch (error) {
            console.log(error);
            res.status(500).json('Server Problem');
        }
    })

    //- List_ALl_Article_API - Only for Testing-Public_API
    router.get('/articles', async (req,res) => {
        res.send(await Article.find());
    });
}

export default articalRoutes;
