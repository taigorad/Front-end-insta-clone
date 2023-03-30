
import './App.css';
import Home from "./routing/Home"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Landingcomponent from "./component/landing/Landing"
function App() {
  return (
<div className="App">
   
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/landing" element={<Landingcomponent/>} />
</Routes>
</BrowserRouter>
</div>
  );
}

export default App;
