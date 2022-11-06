require('./console');
require('dotenv').config();

const express = require('express');
const taskRouter = require('./routes/taskRouter');
const connectDB = require('./db/connectDB');
const notFound = require('./middleware/not_found');
const errorHandler = require('./middleware/error_handler');

const app = express();

app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks', taskRouter);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const init = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('DB connection is successfully...');

    app.listen(port, () => {
      console.log(`Server running on PORT: ${port}`);
    });
  } catch (err) {
    console.log(`Invalid mongodb url, Pls check your url...`);
  }
};

init();
