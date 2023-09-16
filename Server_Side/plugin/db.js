import mongoose from 'mongoose';
//MongoDB Link
const mongodbLink = 'mongodb://localhost:27017/CMS';

const connectMongoDB = async (app) =>{
    try {
        await mongoose.connect(mongodbLink);
        console.log('MongoDB Connected');
    } catch (error) {
        console.log(error);
    }
}

//export connectMongoDB
export default connectMongoDB;