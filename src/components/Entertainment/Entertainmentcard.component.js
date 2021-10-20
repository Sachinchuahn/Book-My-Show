 import React from "react";
 import Slider from "react-slick";
const EntertainmentCard =(props)=> {
    return(
<>
<div className ="w-full h-30 px-2">
    <img 
    className ="w-full h-full rounded-xl"
    src ={props.src}
    alt="Entertainment "
    />
</div>
</>

    );

};

const EntertainmentCardSlider= () => {
    const EntertainmentImage =[
        "https://images.unsplash.com/photo-1613013383640-6226419147d7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ul9GeW4tR3d0bHd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1616971348557-9ea6dcc14a4e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ul9GeW4tR3d0bHd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1617228133035-2347f159e755?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        
        "https://images.unsplash.com/photo-1613013383640-6226419147d7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ul9GeW4tR3d0bHd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1616971348557-9ea6dcc14a4e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ul9GeW4tR3d0bHd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1617228133035-2347f159e755?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        

    ];

    const settings ={
   infinite:true,
   autoplay:false,
   slidesToShow:4,
   slidesToScroll:4,
   InitialSlide:0
}


    return(
<>
<Slider {...settings}>
{EntertainmentImage.map((image) => (
<EntertainmentCard src={image}/>

))}


</Slider>



  </>


    )
}
export default EntertainmentCardSlider;