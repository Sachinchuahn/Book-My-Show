import React from "react";
//import DefaultHOC from "../../HOC/Default.HOC";
import {BiChevronRight} from 'react-icons/bi';
import{BiSearch} from 'react-icons/bi';
import{BiChevronDown} from 'react-icons/bi';
import{BiMenu } from 'react-icons/bi';

const NavSm =() => {
return(
    <>
    <div class="text-white flex items-center justify-between">
        <div>
            
            <h3 class="text-xl font-bold"> It all Starts Here!</h3>
            <span class="text-gray-400 text-xs flex items-center ">
                Bhubaneswar <BiChevronRight/>
            </span>
        </div>

    <div class="w-8 h-8 ">
    <BiSearch  class="w-full h-full"/>
    </div>
    </div>
</>)
}; //navbar small medium and large 
const NavMd =() =>{

return(
<div class ="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md ">
    <BiSearch/>
    <input type="search" class= "w-full focus:outline-none" placeholder ="Search for movies ,events, plays,sports"/>
</div>

)
};
const NavLg =() =>{
    return(
<>
<div className="container mx-auto px-4 flex items-center justify-between">
   <div className="flex items-center w-1/2">
      <div className="w-15 h-14 px-3">
         <img
            src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png"
            alt="logo"
            className="w-full h-full" />
      </div>
      <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
         <BiSearch />
         <input type="search" className="w-full focus:outline-none" placeholder="Search for movies, events, plays, sports and activities" />
      </div>
   </div>
   <div className="flex items-center gap-3">
   <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer	">
      Bhubaneswar
      <BiChevronDown />
   </span>
   <button className="bg-red-600 text-white text-sm rounded px-2 py-1">
   Sign in
   </button>
   <div className="w-8 h-8 text-white">
   <BiMenu className="w-full h-full" />
   </div>
   </div>
</div>



</>
)};
const Navbar = () =>{
return(

<>

<nav class="bg-navCol-800 px-4 py-2"> 


<div class ="md:hidden">{

<NavSm/>
    /*Mobile Screen*/
}</div>
<div class ="hidden lg:hidden md:flex">{
<NavMd/>
/*Tablet Screen */
}</div>

<div class ="hidden lg:flex ">{
    <NavLg/>
    

/*Desktop Screen */
}</div>

</nav>
</>

)
};

export default Navbar ;
