import {Router} from "express";
import Event from "./Event.js";

const router = new Router()


router.get('/post',(async (req, res) => {
    try {

        const event = await Event.find()
        res.json(event)
    }catch (e)
    {
        res.status(500).json(e)
    }
}))


router.post('/post',(async (req, res) => {
    try {
        const {title, startime, endtime, content} = req.body
        const event = await Event.create({title, startime, endtime, content})
        res.json(event)
    }catch (e)
    {
        res.status(500).json(e)
    }
}))


router.put('/post/:id',(async (req, res) => {
    try {
        const user = req.body
        const {id} = req.params
        if(!id)
        {
            res.status(400).json('dont have ID')
        }
        const subs = await Event.findByIdAndUpdate(id,{$addToSet:{subs:[,user._id]}})
        res.json(subs)
    }catch (e)
    {
        res.status(500).json(e)
    }
}))

router.put('/put/posts/:id',(async (req, res) => {
    try {
        const user = req.body
        const {id} = req.params
        if(!id)
        {
            res.status(400).json('dont have ID')
        }
         const subs = await Event.findById(id)
         const datastart = subs.startime
         const dataend = subs.endtime
        const day = new Date().getDay()
        const month = new Date().getMonth()
        const year = new Date().getFullYear()

        const temp = datastart.split('')
        const eyear = temp[6]+temp[7]+temp[8]+temp[9]
        const emonth = temp[3]+temp[4]
        const eday = temp[0]+temp[1]
        if(eyear==year){
            if(emonth<=month)
            {
                if(day>eday+2 && dataend>=2)
                {
                    const deletesubs =await Event.updateOne({_id:id},{$pull:{subs:user._id}})
                    res.json(deletesubs)
                    console.log(subs)
                    console.log(deletesubs)
                }
            }
        }

    }catch (e)
    {
        res.status(500).json("Bad Request")
    }
}))

export default router;
