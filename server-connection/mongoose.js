const mongoo=require("mongoose")
const url="mongodb+srv://taigorad:goradwadi10@cluster0.ba6s9tj.mongodb.net/insta?retryWrites=true&w=majority"
mongoo.connect(url).then(()=>{

    console.log("data sucessfully connect")
 }).catch(()=>{
    console.log("no sucess")
 })
 const schema=new mongoo.Schema({
    name:{type:String},
    location:{type:String},
    description:{type:String}
 })

 
 const mode=new mongoo.model("content",schema)
module.exports=mode