const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storeSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    
}, { timestamps: true });


const Store = mongoose.model('Store', storeSchema);
module.exports = Store;