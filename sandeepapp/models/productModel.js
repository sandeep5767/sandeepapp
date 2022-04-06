const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    ProductId: {
        type:String
    },
    Name: {
        type:String
    },
    Price: {
        type:String
    },
    
    ImageName: {
        type: String
    },
})


module.exports = mongoose.model('Products', Product);