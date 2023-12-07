// require dependencies

//required dependencies
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

//required files
const connectMongoDB = require('./config/db')   // require DB connection
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');


connectMongoDB();       //connect DB
dotenv.config();        // make .env work
const app = express();

//creating api
app.use('/api/books', bookRoutes)

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send('Running')
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
