import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GoogleMapReact from 'google-map-react';
import IconButton from '@mui/material/IconButton';
import {
    Typography,
} from "@mui/material";

const AddressMap = ({ height }) => {
    const Marker = ({ text }) => <div> <IconButton onClick={() => { window.open('https://maps.app.goo.gl/JmEN8BJUfc5GfRbq8?g_st=iw'); }} aria-label="delete"><LocationOnIcon sx={{ color: "red", fontSize: '58px' }} /></IconButton><Typography color="red" variant="overline" display="block" gutterBottom>
        {text}
    </Typography></div>;
    const defaultProps = {
        center: {
            lat: -6.5499597,
            lng: 106.8244524
        },
        zoom: 18
    };
    return <div style={{ minHeight: height }}>
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDjOYCMr1cqLXegQH_QzfvarpCWjKUEFnc" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Marker
                    lat={-6.5499597}
                    lng={106.8244524}
                    text="NeoGreen"
                />
            </GoogleMapReact>
        </div>


    </div>
}

export default AddressMap;