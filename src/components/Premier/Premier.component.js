import React from "react";
import Slider from "react-slick";
import Poster from '../Poster/poster.component';
import settings from "../../config/PosterCarousal.config";
import PremierImages from "../../config/TempPosters.config";

export const Premier =() =>{
       return(<>

<div className="flex flex-col items-start py-4">

<h3 className="text-white text-xl font-bold">title</h3>
        <p className="text-white text-sm">Premiers  </p>
    </div>
    <Slider {...settings}>
{PremierImages.map((image)=>(
    <Poster {...image} isDark />    
    ))}

    </Slider>
        
    
    
    </>);
};
export default Premier;