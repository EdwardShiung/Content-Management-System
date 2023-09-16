import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectMongoDB from '../plugin/db.js';

const app = express();
//-- Server Port
const port  = 3000;

//-- Middle Ware
app.use(bodyParser.urlencoded({extended:false}));

//-- Cors
app.use(cors());

//-- JSON
app.use(bodyParser.json());

//-- DB Plugin
connectMongoDB(app);

//-- Routes Module


app.get('/',(res, req) =>{
    console.log('environment setting');
})




app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})
