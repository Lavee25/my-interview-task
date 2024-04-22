import express from 'express'
const app=express();
require('dotenv').config();
const port=process.env.PORT;
import db from './startup/database'
db();
require('./startup/middleware')(app);
require('./startup/router')(app);



app.listen(port,()=>{
    console.log(`app running on port ${port}`)
})





//for create tscconfig.json file command is >>>.... npx tsc --init