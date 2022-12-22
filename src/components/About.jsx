import React from "react";
import { Grid } from "@mui/material";
import IMG from "../assets/images/img14.jpeg";
import styles from "./styles";

const AboutSection = ({ height }) => {
	return (
		<div id="about"
			className=''
			style={{ minHeight: height, borderBottom: "4px solid #245236f5" }}>
			<h1
				style={styles.h1}
				className='no-margin pt-2 pb-2 mt-2 mb-2 text-center text-black'>
				About Us
			</h1>
			<Grid container sx={{ paddingLeft: '50', paddingRight: '50' }}>
				<Grid item xs={12} md={5}>
					<img style={{ "marginLeft": '5%', borderRadius: '10px' }} src={IMG} alt='' width='90%' />
				</Grid>
				<Grid item xs={12} md={6}>
					<p
						style={{ ...styles.p, padding: "0px 20px" }}
						className='text-black'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Voluptatibus esse libero maxime, perspiciatis, aliquam quisquam nisi
						ab veniam vel fuga amet labore, aut hic voluptate laborum animi
						consequatur voluptates repudiandae? Lorem ipsum dolor, sit amet
						consectetur adipisicing elit. Voluptatibus esse libero maxime,
						perspiciatis, aliquam quisquam nisi ab veniam vel fuga amet labore,
						aut hic voluptate laborum animi consequatur voluptates repudiandae?
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ipsam
						unde corporis deleniti dolore ratione illum nisi facere nam,
						accusantium distinctio fuga commodi maiores voluptatibus error ut
						ipsa. Voluptatibus, labore?
					</p>
				</Grid>
			</Grid>
		</div>
	);
};

export default AboutSection;
