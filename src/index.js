const express = require('express');
require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//   } else {
//     next();
//   }
//   console.log(req.method, req.path);
//   next();
// });

const multer = require('multer');
const upload = multer({ dest: 'images' });

app.post('/upload', upload.single('upload'), (req, res) => {
  res.send();
  //middleware from multer
});

app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

// const jwt = require('jsonwebtoken');

// const pet = {
//   name: 'Betta',
// };

// pet.toJSON = function () {
//   //console.log(this);
//   return {};
// };

// console.log(JSON.stringify(pet));

// const myFunction = async () => {
//   const token = jwt.sign({ _id: 'test@123' }, 'test1', { expiresIn: '7 days' });
//   console.log(token);

//   const data = jwt.verify(token, 'test1');

//   console.log(data);
// };

// myFunction();
