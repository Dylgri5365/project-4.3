import React, { Component } from "react";
import {
  Route, Routes, 
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Secondpage from "./Secondpage";
import Foximage from "./Foximage";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div><center>
          <h1>2.5 Performance Assessment</h1>
          </center>
          

          <center>
          <ul className="header">
          
            <li><NavLink to="/Firstpage">First Page</NavLink></li>
            <li><NavLink to="/Secondpage">Second Page</NavLink></li> 
            <li><NavLink to="/Foximage">Image</NavLink></li>
          </ul>
          <div className="content">
          <Routes>
            <Route path="/Firstpage" element={<Home/>}/>
            <Route path="/Secondpage" element={<Secondpage/>}/>
            <Route path="/Foximage" element={<Foximage/>}/>
            </Routes>
            
          </div>
          </center>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;