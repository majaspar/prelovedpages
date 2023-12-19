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
const availableCopyRoutes = require('./routes/availableCopyRoutes');


connectMongoDB();       //connect DB
dotenv.config();        // make .env work
const app = express();

app.use(express.json());

app.use(cors());
//creating api
app.use('/api/authors', authorRoutes)
app.use('/api/books', bookRoutes)
app.use('/api/copies', availableCopyRoutes)
app.use('/api/users', userRoutes)

const port = process.env.PORT || 5000;


app.get("/", (req, res) => {
  res.send('Running')
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
