const express = require("express")
const app=express()
const cors = require("cors")
const mode=require("./mongoose")
app.use(cors())
const port=process.env.port||2000
//const route=require("../Route/router")
//app.use(route)



app.use(express.json())



app.post("/add",async(req,res)=>{
   let data=new mode(req.body)
   let result=await data.save()
   
    res.send(result)
})




app.get("/user",async(req,res)=>{
    const result=await mode.find()
      //result= await result.json()
      
    res.send(result)
})
app.listen(port,()=>{
    console.log("server start")
})



