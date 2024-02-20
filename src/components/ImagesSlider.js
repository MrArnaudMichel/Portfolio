import React, {useState} from "react";
import './css/ImagesSlider.css';

function ImagesSlider({images}){
	const [currentImage, setCurrentImage] = useState(0);

	const nextImage = () => {
		setCurrentImage(prevImage => (prevImage + 1) % images.length);
	};

	const prevImage = () => {
		setCurrentImage(prevImage => (prevImage - 1 + images.length) % images.length);
	};

	return (
		<div className="image-slider">
			<div className="image-container">
				<img src={images[currentImage]} alt="" style={{width: '30vw', height: '30vh', objectFit: 'cover'}}/>
				<button onClick={prevImage} className={"slider-button prev"}>{"<"}</button>
				<button onClick={nextImage} className={"slider-button next"}>{">"}</button>
			</div>
		</div>
	);
}

export {ImagesSlider};