import { useState, useEffect } from "react";
import "../Styles/Main.sass";
import {
	image1,
	image2,
	image3,
	image4,
	image5,
	image6,
	image7,
	image8,
	image9,
	image10,
	image11,
	image12,
	image13,
	image14,
	image15,
} from "../Images/Images";

const Main = ({ incrementHighScore, incrementScore, clearScore }) => {
	const [images, setImages] = useState([
		image1,
		image2,
		image3,
		image4,
		image5,
		image6,
		image7,
		image8,
		image9,
		image10,
		image11,
		image12,
		image13,
		image14,
		image15,
	]);

	// activeImages is an array of length 6
	const [activeImages, setActiveImages] = useState([]);

    const [selectedImages, setSelectedImages] = useState([]);

	useEffect(() => {
		setActiveImages(changeActiveImages(images, 6));
	}, []);

	const changeActiveImages = (array, numElements) => {
		let result = [];
		let randomIndex;
		let count = 0;

		while (count < numElements) {
			randomIndex = Math.floor(Math.random() * array.length);
			if (!result.includes(array[randomIndex])) {
				result.push(array[randomIndex]);
				count++;
			}
		}

		return result;
	};

	const items = activeImages.map((item, index) => (
		<div
			style={{ backgroundImage: "url(" + item + ")" }}
			key={index}
			className="card"
			title="card"
            id={item}
			onClick={(e) => {
				setActiveImages(changeActiveImages(images, 6));
                if(!selectedImages.includes(e.target.id))
                {
                    setSelectedImages(selectedImages.concat(e.target.id))
                    incrementScore();
                    incrementHighScore();
                }
                else{
                    setSelectedImages([]);
                    clearScore();
                };
			}}
		/>
	));

	return <main>{items}</main>;
};

export default Main;
