import React from "react";
import Carousel from "react-material-ui-carousel";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";

const ImageCarousel = ({ data, currentContent, handleContent, total }) => {
	return (
		<Carousel
			autoPlay={false}
			swipe
			height={window.innerHeight}
			NextIcon={<ArrowForwardIos style={{ transform: "translateX(2px)" }} />}
			PrevIcon={<ArrowBackIos style={{ transform: "translateX(6px)" }} />}
			next={() => (currentContent.id < total) ? handleContent(currentContent.id + 1) : handleContent(0)}
			prev={() => (currentContent.id !== 0) ? handleContent(currentContent.id - 1) : handleContent(total)}
		>
			{data.map((_data) => (
				<img
					src={_data.img}
					key={_data.id}
					alt=''
					style={{ width: "100%", height: "auto" }}
				/>
			))}
		</Carousel >
	);
};

export default ImageCarousel;
