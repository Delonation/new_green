import React from "react";
import styles from "./styles";
import SITEMAP from "../assets/images/img8.jpeg";

const Sitemap = ({ height }) => {
	return (
		<div id="sitemap"

			className='no-margin text-center'>
			<h1
				style={styles.h1}
				className='no-margin pt-2 pb-2 mb-2 text-center text-black'>
				Siteplan
			</h1>
			<img
				src={SITEMAP}
				alt=''
				width='100%'
				height='auto'
				className='drop-shadow'
			/>
		</div>
	);
};

export default Sitemap;
