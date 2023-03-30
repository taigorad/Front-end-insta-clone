import React from "react";
import {Link} from "react-router-dom"
import homeimage from "../image/lens-1418954.png"
import "./home.css"
const Home=()=>{
   return (<div className="container">
       <div className="homeimage"><img src={homeimage} alt="homepage image"/></div>
       <div className="homeheading"><h1>10x Team 04</h1>
       <button><Link to="/landing">Enter</Link></button></div>
   </div>)
}
export default Home