const express = require('express')
const app = express()
const cors = require('./middlewares/cors')
const { mongoose } = require('mongoose');
const session = require('./middlewares/session');
const router = require('./routes');

const connectionString = 'mongodb://127.0.0.1:27017/Book-Store';

const initDB = () => mongoose.connect(connectionString)

startServer()
async function startServer() {
    initDB();
    app.use(express.json())
    app.use(cors())
    app.use(session())
    //trimBody
    app.use(router)



    app.listen('3000', () => console.log(`Server is listening on port 3000`))

}
