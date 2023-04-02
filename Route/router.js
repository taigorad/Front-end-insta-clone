const express=require("express")
const route=express.Router()
const cors = require("cors")
const mode=require("../server-connection/mongoose")
const app=express()
app.use(express.json())
app.use(cors())

route.get("/",(req,res)=>{
    res.send("hiii")
})
route.post("/new",async(req,res)=>{
    let name=req.body.name
    console.log(name)
    /*let location=req.body.location
    let descrtiption=req.body.descrtiption
    console.log(name, location,descrtiption)
    let data=new mode ({name:req.body.name,
        location:req.body.location,
         descrtiption:req.body.descrtiption})
         let result=await data.save()*/
         
    res.send("result")
})


module.exports=route