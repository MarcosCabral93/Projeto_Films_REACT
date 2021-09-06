import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";

const Rota=()=>{

    return(

        <Router>

            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/Sobre" component={Sobre}></Route>
            </Switch>


        </Router>
    )
}

export default Rota;