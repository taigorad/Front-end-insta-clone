import React ,{useEffect,useState}from "react";

import "./postview.css"


const Postview=()=>{
    
        const [products,setproduncts]=useState([])
        useEffect(()=>{ getproducts()},[])
    
        const getproducts= async()=>{
            let result = await fetch("http://localhost:2000/user")
            result=await result.json()
            //console.log(result)
            setproduncts(result)
            
        }
        //console.log(products)
    
        
        //console.log(products)
        return (<>{products.length>0?
            <div className="product-list">
            <h1 className="user">user</h1>
        
            <ul>
                <li>S. NO</li>
                <li>Name</li>
                <li>Location</li>
                <li>Description</li>
            
            </ul>
    {
        products.map((item,index)=>
            <ul key ={item}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.location}</li>
                <li>{item.description}</li>
                
        
    
            </ul>
    
        )
    }
            </div >:<h1 className="h1">there is no more item </h1>
    }</>
        )
    }


export default Postview