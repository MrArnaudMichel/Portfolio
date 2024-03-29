import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/ImagesSlider.css";

const ImageSlider = ({images}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <div className="slick slick-prev custom-button">Previous</div>,
        nextArrow: <div className="slick slick-next custom-button">Next</div>,
    };

    return (
        <div className="image-slider">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={`/${image}`} width={1920} height={1080} alt={`Slide ${index}`}/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;