import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import { BrowserRouter as  Router,Route,Routes} from "react-router-dom";
import Header from "./components/Header";



function App(){
  return(
   
    <Router>
      <Header/>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
    </Router>
 

  );
}

export default App;