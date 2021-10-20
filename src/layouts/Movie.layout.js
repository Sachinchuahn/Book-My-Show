import React from "react";
import Navbar from "../components/Navbar/navbar.component";
//import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component.js";
const MovieLayout =(props) =>{
    return(
<>
<Navbar/>
   
       {props.children}
        </>
    );
};

export default MovieLayout;