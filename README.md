# Task Manager

Here used _**Vanilla JS**_ , _**NodeJS**_ , _**ExpressJS**_ , _**MongoDB**_ , _**MongooseJS**_ , _**MongoDB**_ , _**Html**_ & _**Css**_

Followe to [udemy course](www.udemy.com)

<p> <strong>Task Manager</strong> Demo here  🤨...</p>

![task manager](public/task_manager.png 'Task Manager')

## CRUD

_crud_ patern follow

---

1. **Create User**
2. **Read User**
3. **Update User**
4. **Delete User**

## MongoDB Local

---

`MONGO_URI=mongodb://localhost:27017/My_Task_Manager`

## Mongoose Connection

```
const mongoose = require('mongoose');

const connectDB = (url) => mongoose.connect(url);

module.exports = connectDB;

```

## App.js

```
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

```
