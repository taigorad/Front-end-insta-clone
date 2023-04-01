import React,{useState} from "react"
import icon from "../image/icon.svg"
import camera from "../image/camera.png"
import "./newpost.css"
import {Link} from "react-router-dom"

const Newpost=()=>{

    const [name,setname]=useState("")
    const [location,setlocation]=useState("")
    const [description,setdescription]=useState("")


    const addtodatabase=async()=>{

        //console.log(name,location,description)
        let result= await fetch("http://localhost:2000/add",{
    method:"post",
    body:JSON.stringify({name,location,description}),
    headers:{
        "Content-Type":"application/json"
    }
    })
    result=await result.json()
    console.log(result)
}

return(
   
    <div className="home" >
        <div className="navbar1">
            <img  className="img2"src={icon} alt=" of "/>
            <h1 className="h1">Instaclone</h1>
         <Link to="/viewpost" ><img  className="img1"src={camera}alt=" of"/></Link> 

        </div>
        <div className="inputfield">
<div className="innerinput">
<br/>  <br/>
<input type="text" placeholder="Author" onChange={(e)=>{setname(e.target.value)}}/><br/><br/>
<input type="text" placeholder="Location" onChange={(e)=>{setlocation(e.target.value)}}/> <br/><br/>
<input type="text" placeholder="Description" onChange={(e)=>{setdescription(e.target.value)}}/> <br/><br/>
<button className="button1" onClick={addtodatabase}>POST</button>
</div>
        </div>
</div>


)
}


export default Newpost