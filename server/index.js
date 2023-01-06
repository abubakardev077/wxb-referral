require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const connection = require('./db');
const User = require('./model/auth.model');

//database connection
connection();

//middlewares
app.use(express.json());
app.use(cors());

//Load all routes
const authRouter = require('./routes/auth.routes');
const userRouter = require('./routes/user.routes');

//routes
app.get('/', (req, res) => res.json('Server is live'));
app.use('/api', authRouter);
app.use('/api', userRouter);
app.get('/api/all-users', async (req, res) => {
  const allUsers = await User.find();
  res.json(allUsers);
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on localhost PORT: ${port}`));

module.exports = app;


