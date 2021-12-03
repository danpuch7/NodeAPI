import express from 'express'
import mongoose from 'mongoose'


import router from './router.js';
import routerUser from "./userRouter.js";
const PORT = 5000;

const app = express()

const DB_URL = `mongodb+srv://danpuch:Illia2002@cluster0.f5x6l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

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
