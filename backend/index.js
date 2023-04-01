
global.foodData = require('./db')(function call(err, data, CatData) {
  // console.log(data)
  if(err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
})
const Food =   require("./models/food.model");
const Category =   require("./models/category.model");
const express = require('express')
const app = express();
const cors = require("cors");
const port = 5000
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cors());
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/all', async (req, res) => {

  try {

    let myFoods = await Food.find()
      res.send({
          data: myFoods
      })

  } catch(err) {
      console.log(err.message)
      res.status(500).send({
          error: 'Something went wrong'
      })
  }

})
app.use(express.json());
app.post('/addfoods', async (req, res) => {

  try {

      const data = req.body;

      const myFood = await Food.create(data);

      res.send({
          data: myFood
      })

  } catch(err) {

      console.log(err.message)
      res.status(500).send({
          error: 'Something went wrong'
      })
  }
})

app.post('/addcategory', async (req, res) => {

  try {

      const data = req.body;

      const myFoodCategory = await Category.create(data);

      res.send({
          data: myFoodCategory
      })

  } catch(err) {

      console.log(err.message)
      res.status(500).send({
          error: 'Something went wrong'
      })
  }
})

app.use('/api/auth', require('./Routes/Auth'));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

