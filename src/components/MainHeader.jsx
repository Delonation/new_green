import React, { useState } from "react";
import { Grid } from "@mui/material";
import { HomeContent } from "../assets/data/index";
import IMG5 from "../assets/images/img6.jpeg";

import Paper from '@mui/material/Paper';

const MainHeader = ({ height }) => {
	const [currentContent, setCurrentContent] = useState(HomeContent[0]);
	const styles = {
		paperContainer: {
			backgroundImage: `url(${IMG5})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundPosition: "center"
		}
	};

	return (
		<Grid style={{ borderBottom: "4px solid #245236f5", justifyContent: 'space-around' }}>
			<Paper style={styles.paperContainer}>

				<Grid item
					xs={12}
					md={12}
					minHeight={height}
					sx={{
						minHeight: {
							xs: height / 2,
							sm: height / 2,
							md: height,
							lg: height,
						},
					}}
					className='text-black'
					style={{
						backgroundImage: { IMG5 },
						display: "flex",
						padding: "5px 20px",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}>

					<h1 className='no-margin text-white' style={styles.h1}>
						{currentContent.heading}
					</h1>
					<h3 className='no-margin text-white' style={styles.h2}>
						{currentContent.subHeading}
					</h3>
					<p className='text-center text-white' style={styles.p}>
						{currentContent.desc}
					</p>
				</Grid>
			</Paper>
			{/* <Grid
				item
				xs={12}
				md={6}
				minHeight={height}
				sx={{
					minHeight: { xs: height / 2, sm: height / 2 },
				}}
				style={{}}>
				<ImageCarousel
					data={HomeContent}
					currentContent={currentContent}
					handleContent={(value) => {
						console.log(value)
						setCurrentContent(HomeContent[value])
					}}
					total={HomeContent.length - 1}
				/>
			</Grid> */}
		</Grid >
	);
};

export default MainHeader;
