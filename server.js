const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db')
const transaction = require('./routes/transactions')

dotenv.config({ path: './config/config.env' })
const app = express();

app.use(express.json())
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

connectDB();
app.use('/api/v1/transactions', transaction)

const port = process.env.PORT || 5000;
app.listen(port, console.log(`server running in ${process.env.NODE_ENV} on the port ${process.env.PORT}`));
