import {Router} from "express";
import User from "./User.js";

const routerUser = new Router()


routerUser.post('/user',(async (req, res) => {
    try {
        const {login, password, name} = req.body
        const user = await User.create({login, password, name})
        res.json(user)
    }catch (e)
    {
        res.status(500).json("Succsesfully registered!")
    }
}))



routerUser.post('/login',(async (req, res) => {
    try {
        const {login, password} = req.body
        const user = await User.find({login:login, password:password})
        if(res.statusCode==200)
        {
            res.json(user.id)
        }

    }catch (e)
    {
        res.status(500).json("Succsesfully registered!")
    }
}))


routerUser.get('/user')


export default routerUser
