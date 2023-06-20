const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()


const app = express()

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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

  

