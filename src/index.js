require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/router');
const adminRouter = require('./routes/router.admin')
const userRouter = require('./routes/router.user')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/', router);
app.use('/', adminRouter);
app.use('/', userRouter);

app.listen(process.env.SERVER_PORT, () => {console.log('Server Running on ' + process.env.SERVER_PORT + ' ' + process.env.AUTHOR)});
