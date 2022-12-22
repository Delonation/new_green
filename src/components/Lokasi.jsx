import React from "react";
import "../App.css";
import { Grid } from "@mui/material";
import { CardContents } from "../assets/data/index";
import styles from "./styles";

const Lokasi = ({ height }) => {
	return (
		<div id="lokasi"
			className='text-center'
			style={{ minHeight: height }}>
			<h1
				style={styles.h1}
				className='no-margin mb-2 pt-2 pb-2 text-center text-black'>
				Lokasi{" "}
			</h1>
			<p style={styles.p} className='text-black p-2'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam possimus
				quis dolorum maxime, harum laudantium quae reiciendis necessitatibus id
				commodi nostrum libero alias repellendus nisi unde. Doloribus nisi
				nostrum quidem!
			</p>
			<Grid container alignContent='center' justifyContent='center'>
				{CardContents.map((card) => (
					<Grid
						key={card.id}
						item
						xs={12}
						md={4}
						lg={4}
						className='text-center box-shadow m-1'
						style={{
							objectFit: 'cover',
							position: "relative",
							maxWidth: 450,
							minWidth: 450,
							minHeight: 300,
						}}>

						<div className="content">
							<div className="content-overlay"></div>
							<img className="content-image ImageBox " src={card.img} alt={card.id} width='400px' height='300px' />
							<div className="content-details fadeIn-bottom fadeIn-right">
								<h3>{card.title}</h3>
								<p>{card.distance}</p>
							</div>
						</div>
					</Grid>
				))}
			</Grid>
		</div>
	);
};
export default Lokasi;
