const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()


const app = express()
const companyRoute = require('./Routers/Company')
const openingRoute = require('./Routers/Opening')
const userRoute = require('./Routers/User')

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify: false,  
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const port = process.env.PORT || 3000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get('/',(req,res)=>res.send("Hello World"))
app.use('/api/company',companyRoute)
app.use('/api/opening',openingRoute)
app.use('/api/user',userRoute)


  

