import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectMongoDB from '../plugin/db.js';
import userRoutes from '../routes/user_index.js';
import initializePassport from '../plugin/passport.js'
import passport from 'passport';

const app = express();
//-- Server Port
const port  = 3000;

//-- Middle Ware
app.use(bodyParser.urlencoded({extended:false}));

//-- Cors
app.use(cors());

//-- JSON
app.use(bodyParser.json());

//-- Passport Authentication
initializePassport(passport);

//-- DB Plugin
connectMongoDB(app);

//-- Routes Module
//- User Module
userRoutes(app);





app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})
