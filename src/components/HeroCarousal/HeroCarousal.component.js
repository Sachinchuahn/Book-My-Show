import React,{useState , useEffect} from "react";
//import React from "react";
import HeroSlider from 'react-slick';
import axios from "axios";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Component 
import { NextArrow,PrevArrow } from "./Arrows.components";
const HeroCarousal=()=> {

const [images , setImages ] = useState([]);
   // useEffect(()  => {},[]);
    useEffect(() => {
      const requestNowPlayingMovies = async() => {
      const getImages =await axios.get("/movies/now_playing");
      setImages (getImages.data.results);
      }
      requestNowPlayingMovies();
    },[]);



    
     
    const settingsLg = {
          arrows: true,
          autoplay: true,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "300px",
          infinite: true,
          nextArrow:<NextArrow/>,
          prevArrow:<PrevArrow/>
        }      
    const settings = {
        arrows:true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow:<NextArrow/>,
      prevArrow:<PrevArrow/>
    };

//const images =["https://images.unsplash.com/photo-1613013383640-6226419147d7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ul9GeW4tR3d0bHd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
//"https://images.unsplash.com/photo-1616971348557-9ea6dcc14a4e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ul9GeW4tR3d0bHd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
//"https://images.unsplash.com/photo-1617228133035-2347f159e755?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
//]

  return(

   <>
<div className="lg:hidden">


<HeroSlider { ...settings}>
{
    images.map((image)=> (
        <div className="w-full h-96 px-2 py-3">
            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
             alt="testing" class= "w-full h-full rounded-md"/></div>
    )
    )

}
</HeroSlider>
</div>

<div className="hidden lg:block">
  <HeroSlider {...settingsLg}>
  {
    images.map((image) => (
      <div className="w-full h-96 px-2 py-3">
      <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
      
      alt="testing" className="w-full h-full rounded-md"/>
      </div>
    ))
  }
  </HeroSlider>
  </div>

</>

)






}
export default HeroCarousal;
