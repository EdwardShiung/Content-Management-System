import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    coverPic:{
        type:String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    categories:[{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }],
    body:{
        type:String,
        required: true
    },
    status:{
        type: String,
        enum: ['1', '2', '3', '4', '5'],
        default: '3'
    },
    publishDate:{
        type: Date,
    }
}, { timestamps: true });


ArticleSchema.pre('save', function(next) {
    if (!this.publishDate) {
        this.publishDate = new Date();
    }
    next();
});

const Article = mongoose.model('Article', ArticleSchema);

export default Article;
