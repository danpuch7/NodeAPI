import mongoose from 'mongoose'

const Event = new mongoose.Schema({
    title:{type:String,required:true},
    startime:{type:String,required:true},
    endtime:{type:String,required:true},
    content:{type:String,required:true},
    subs:{type:Array}
})

export default mongoose.model('Event',Event)
