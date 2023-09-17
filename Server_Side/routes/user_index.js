import express from 'express';
import User from '../model/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { KEY } from '../plugin/config/jwtkey.js';
import passport from 'passport';


//Using express router
const router = express.Router();

const userRoutes = (app) =>{
    //Middleware For Router
    app.use('/api/user', router);

    //- RegisterAPI-Public_API
    router.post('/register', async (req, res) => {

        try {
            // email already in DB
            const user = await User.findOne({
                email:req.body.email
            })
            if(user){
                return res.status(400).json('The email has already existed');
            }else{
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    identity: req.body.identity
                });

                const salt = await bcrypt.genSalt(10);
                const hash = await bcrypt.hash(newUser.password, salt);

                newUser.password = hash;
                const addUser = await newUser.save();
                return res.json(addUser);
            }
        } catch (error) {
            console.log(or);
            res.status(500).json('Server Problem');
        }
    });

    //- List_ALl_UserAPI - Only for Testing-Public_API
    router.get('/users', async (req,res) => {
        // res.send('hi');
        res.send(await User.find());
    });

    //- LoginAPI-Public
    router.post('/login', async(req,res) =>{
        const email = req.body.email;
        const password = req.body.password;
        try {
            const user = await User.findOne({email});
            if(!user){
                return res.status(404).json('No User Existed')
            }
            const match = await bcrypt.compare(password, user.password);
            if(match){
                const potocal = {
                    id: user.id,
                    name: user.name,
                    identity: user.identity
                };
                jwt.sign(potocal,KEY, {expiresIn: 3000}, (err, token) =>{
                    if(err) throw err;
                    res.json({
                        success: true,
                        token: 'Bearer ' + token
                    });
                });
            }else{
                return res.status(400).json('Wrong Password');
            }
        } catch (error) {
            console.log(error.message);
            res.status(500).json('Server Problem')
        }
    });


    //- LoginAPI-Private_API
    router.get('/current', passport.authenticate('jwt', { session:false }), (req,res) => {
        try {
            res.json({
                id: req.user.id,
                name: req.user.name,
                email: req.user.email,
                identity: req.user.identity
            });
        } catch (error) {
            console.log(error);
        }
    })

}


export default userRoutes;