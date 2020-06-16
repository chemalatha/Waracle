const mongoose = require('mongoose');
const validator = require('validator');

const cakeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String
    },    
    comment:{
        type:String
    },
    yumFactor:{
        type:Number,
        default:0,
        validate(value){
            if(value>5 || value<0){
                console.log('tru')
                throw new Error('Please enter a valid yum factor');
            }
        }
    }
},{timestamps: true});
const Cake = mongoose.model('Cake',cakeSchema);
module.exports = Cake;