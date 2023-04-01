const mongoose = require("mongoose");
const foodSchema = new mongoose.Schema({
    
        "CategoryName": {
            type:  "String",
            required : true,
        },
        "name": {
            type:  "String",
            required : true,
        },
        "img": "String",
        "options": [{
            "regular": Number,
                "medium": Number,
                "large": Number
        }],
        "description": "String"
   
});

// const Food = await mongoose.connection.db.collection("food_items");
module.exports = mongoose.model('food_items', foodSchema )
