const mongoose = require("mongoose");
const foodCategorySchema = new mongoose.Schema({
    
        "CategoryName": {
            type:  "String",
            required : true,
        }
});

// const Food = await mongoose.connection.db.collection("food_items");
module.exports = mongoose.model('foodCategory', foodCategorySchema, "foodCategory"  )
