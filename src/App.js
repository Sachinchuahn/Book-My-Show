/*import logo from './logo.svg';
import './App.css';

*/
import{ Route } from "react-router-dom";
import axios from "axios";
import DefaultHOC from "./HOC/Default.HOC";


//Component
//import Temp from "./components/temp";
import HomePage from"./pages/Home.page";
import MovieHOC from "./HOC/Movie.HOC";
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";
//import css file 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



//axios default settings
axios.defaults.baseURL ="https://api.themoviedb.org/3"; 
axios.defaults.params ={};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;


/*function Name(){
  return <h1> Welcome to Home Page</h1>
}
function Name2(){
  return <h2>Welcome to Movie Page</h2>
}



*/

function App() {
  return (
    <>
    <DefaultHOC path="/" exact component ={HomePage} />
    <MovieHOC path="/movie/:id" exact component ={Movie} />
    <DefaultHOC path="/Plays" exact component ={Plays} />

    </>
   
  );
}

export default App;
/*<Route path="/" component={Name}/>
    <Route path="/movie" component={Name2}/>
     

/*
const sachin={
  name:"sachin",
  dob:1200
};

const student = sachin ;
const student = {
  Name:"sachin",
  dob:1200,
  goodStudent:true
};



student.goodStudent =true;

// spread operator 
const sachin={
  Name:"sachin",
  dob:1200,
};

const student ={...sachin, goodStudent:true};
/* inside the return for run the browser tailwind css
 <div className="App p-6">
    
    
    <h1 class="text-lg p-6"> Hello Sachin 	</h1>
    <h1 class="text-8xl hover:text-red-500	p-6	 "> Need to call out the claasses  </h1>
        <button class="border-t-2 px-2 py-1  border-green-100  rounded  bg-red-400   text-gray-400	hover:bg-red-500  p-6	">Hello!</button>
        <button class="border-t-2 px-2 py-1  border-green-100 md:border-red-400 rounded  bg-blue-400 md:bg-green-100  text-gray-400	hover:bg-red-500  p-6	">Hello! medium screen and large screen</button>
        
        <h1 class="text-sachin-700"> Sachin</h1>
        </div>

*/