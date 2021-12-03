import express from 'express'
import mongoose from 'mongoose'

import DB_URL from './private.js'

import router from './router.js';
import routerUser from "./userRouter.js";
const PORT = 5000;

const app = express()


app.use(express.json())

app.post('/post',router)
app.get('/post',router)

app.post('/user',routerUser)
app.post('/login',routerUser)

app.put('/post/:id',router)
app.put('/put/posts/:id',router)

async function startApp(){
    try{
        await mongoose.connect(DB_URL)
        app.listen(PORT,()=>{
            console.log("Server started!")})

    }
    catch (e){
        console.log(e)
    }
}



startApp()
