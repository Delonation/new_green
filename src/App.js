import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MainHeader from "./components/MainHeader";
import AboutSection from "./components/About";
import Sitemap from "./components/Sitemap";
import Lokasi from "./components/Lokasi";
import Tipe from "./components/Tipe"
import Footer from "./components/Footer";
import AddressMap from './components/AddressMap';
import { SliderImage } from './assets/data/index'
import Slider from './components/Slider'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function App() {
	const [height, setHeight] = useState(window.innerHeight);
	useEffect(() => {
		const handleHeight = () => setHeight(window.innerHeight);
		window.addEventListener("resize", handleHeight);
		return () => window.removeEventListener("resize", handleHeight);
	});
	return (

		<div className='App'>
			<FloatingWhatsApp phoneNumber="+6281380001779" accountName="Neo Green" />
			<Navbar />
			<Slider images={SliderImage} />
			{/* <MainHeader height={height} /> */}
			<AboutSection height={height} />
			<Sitemap height={height} />
			<Lokasi height={height} />
			{/* <Tipe height={height} /> */}
			{/* <Contact height={height} /> */}
			<AddressMap height={height} />
			<Footer height={height} />
		</div>
	);
}

export default App;
