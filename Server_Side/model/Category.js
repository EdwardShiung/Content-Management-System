import mongoose from 'mongoose';

const CategoricalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    parent:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }
})

const Category = mongoose.model('Category', CategoricalSchema);

export default Category;