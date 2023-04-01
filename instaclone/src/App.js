
import Home from "./routing/Home"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Landingcomponent from "./component/Newpost"
import Postview from "./component/postview/Postview.js"

function App() {
  return (
<div className="App">
   
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/landing" element={<Landingcomponent/>} />
<Route path="/viewpost" element={<Postview/>}/>
</Routes>
</BrowserRouter>
</div>
  );
}

export default App;
