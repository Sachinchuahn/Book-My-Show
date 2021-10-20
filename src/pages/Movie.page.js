import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import {BiCameraMovie} from 'react-icons/bi';

const launchRazorPay =() =>{
    let options ={
 
        key :"rzp_test_wSw0X9T17ouuK5",
         amount:500,currency:"INR",
         name:"book MY show Clone ",
          description :"Movie purchase on rantal",
          image :"https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler :() => {
            alert ("Payment Sucess")
        },
        theme : {color:"red"}
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
};



const Movie =() =>
{
    return (
        <>
       <MovieHero/>
       

       
       
       <div className="my-12 container mx-auto px-5 lg:w-1/2  lg:ml-64">
           <div className="flex flex-col items-start gap-3">
               <h2 className= "text-gray-800 font-bold text-2xl">About the Movie</h2>
               <p>Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.
 </p>



           </div>
        <div className="my-8">
           <hr />

        </div>
<div><h1>Applicable Offers</h1>
<div className="flex items-start gap-2 bg-yellow-300 border-yellow-400 border-dashed  rounded-md p-3 w-100">
<div className ="w-6 h-4">
         <BiCameraMovie  />
         </div>
         <div className="flex flex-col items-start">
             <h3 className="text-gray-900 text-lg "> Filmy Pass</h3>
             <p className="text-gray-600 text-sm">Get Rs.75 off on 3 movies at @99</p>
         </div> 
         </div>
       </div> 
       <div>
           
       </div>
       <button onClick={launchRazorPay} class=" mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> BOOKS TICKETS  </button>


       </div>
       
        </>
    );
};
export default Movie;