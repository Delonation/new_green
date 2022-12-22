import styles from './styles'
import React from "react";
import { Grid } from "@mui/material";
import HotelIcon from '@mui/icons-material/Hotel';
import WashIcon from '@mui/icons-material/Wash';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HouseIcon from '@mui/icons-material/House';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import IMG1 from "../assets/images/img2.jpeg";
import IMG2 from "../assets/images/img3.jpeg";
import IMG3 from "../assets/images/img4.jpeg";
import IMG4 from "../assets/images/img5.jpeg";
import IMG5 from "../assets/images/img6.jpeg";
import IMG6 from "../assets/images/img7.jpeg";


const Tipe = ({ height }) => {
    return <><div id="tipe"
        style={{ minHeight: height, borderBottom: "4px solid grey" }}>
        <h1
            style={styles.textSlimH1}
            className='no-margin pt-2 pb-2 mt-2 mb-2 text-center '>
            Tipe Hunian
        </h1>
        <Grid container sx={{ marginX: 10 }}>

            <h3 style={styles.h2}>
                Lorem ipsum dolor sit amet
            </h3>
            <Grid container>
                <Grid item xs={8}>
                    <Carousel width={'95%'}>
                        <div>
                            <img alt="slide1" src={IMG1} />
                        </div>
                        <div>
                            <img alt="slide2" src={IMG2} />
                        </div>
                        <div>
                            <img alt="slide3" src={IMG3} />
                        </div>
                    </Carousel>
                </Grid>
                <Grid style={{ display: 'flex', flexDirection: 'column' }} item xs={4}>
                    <span style={{ fontSize: '40px', display: 'flex', alignItems: 'flex-end' }} >{<HotelIcon style={{ fontSize: '60px' }} />} : 3 kamar Tidur</span>
                    <span style={{ fontSize: '40px', display: 'flex', alignItems: 'flex-end' }}>{<WashIcon style={{ fontSize: '60px' }} />} : 3 kamar Mandi</span>
                    <span style={{ fontSize: '40px', display: 'flex', alignItems: 'flex-end' }}>{<DirectionsCarIcon style={{ fontSize: '60px' }} />} : 2 Carport</span>
                    <span style={{ fontSize: '40px', display: 'flex', alignItems: 'flex-end' }}>{<HouseIcon style={{ fontSize: '60px' }} />} : 2 Lantai</span>
                </Grid>
            </Grid>
        </Grid>
    </div >
        <div
            style={{ minHeight: height, borderBottom: "4px solid grey" }}>
            <Grid container sx={{ marginX: 10 }}>

                <h3 style={styles.h2}>
                    Lorem ipsum dolor sit amet
                </h3>
                <Grid container>
                    <Grid item xs={8}>
                        <Carousel width={'95%'}>
                            <div>
                                <img alt="slide1" src={IMG4} />
                            </div>
                            <div>
                                <img alt="slide2" src={IMG5} />
                            </div>
                            <div>
                                <img alt="slide3" src={IMG6} />
                            </div>
                        </Carousel>
                    </Grid>
                    <Grid style={{ display: 'flex', flexDirection: 'column' }} item xs={4}>
                        <span style={{ fontSize: '40px', display: 'flex', alignItems: 'flex-end' }} >{<HotelIcon style={{ fontSize: '60px' }} />} : 3 kamar Tidur</span>
                        <span style={{ fontSize: '40px', display: 'flex', alignItems: 'flex-end' }}>{<WashIcon style={{ fontSize: '60px' }} />} : 3 kamar Mandi</span>
                        <span style={{ fontSize: '40px', display: 'flex', alignItems: 'flex-end' }}>{<DirectionsCarIcon style={{ fontSize: '60px' }} />} : 2 Carport</span>
                        <span style={{ fontSize: '40px', display: 'flex', alignItems: 'flex-end' }}>{<HouseIcon style={{ fontSize: '60px' }} />} : 2 Lantai</span>
                    </Grid>
                </Grid>
            </Grid>
        </div >
        <div
            style={{ minHeight: height, borderBottom: "4px solid grey" }}>
            <Grid container sx={{ marginX: 10 }}>

                <h3 style={styles.h2}>
                    Lorem ipsum dolor sit amet
                </h3>
                <Grid container>
                    <Grid item xs={8}>
                        <Carousel width={'95%'}>
                            <div>
                                <img alt="slide1" src={IMG3} />
                            </div>
                            <div>
                                <img alt="slide2" src={IMG5} />
                            </div>
                            <div>
                                <img alt="slide3" src={IMG6} />
                            </div>
                        </Carousel>
                    </Grid>
                    <Grid style={{ display: 'flex', flexDirection: 'column' }} item xs={4}>
                        <span style={{ fontSize: '40px', display: 'flex', alignItems: 'flex-end' }} >{<HotelIcon style={{ fontSize: '60px' }} />} : 3 kamar Tidur</span>
                        <span style={{ fontSize: '40px', display: 'flex', alignItems: 'flex-end' }}>{<WashIcon style={{ fontSize: '60px' }} />} : 3 kamar Mandi</span>
                        <span style={{ fontSize: '40px', display: 'flex', alignItems: 'flex-end' }}>{<DirectionsCarIcon style={{ fontSize: '60px' }} />} : 2 Carport</span>
                        <span style={{ fontSize: '40px', display: 'flex', alignItems: 'flex-end' }}>{<HouseIcon style={{ fontSize: '60px' }} />} : 2 Lantai</span>
                    </Grid>
                </Grid>
            </Grid>
        </div >
    </>
}

export default Tipe;