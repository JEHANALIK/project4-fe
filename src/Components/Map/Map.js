import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'

import { GoogleMap, LoadScript } from '@react-google-maps/api';


import useStyles from './styles'
const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export default function Map() {
  const classes = useStyles()
  const isMobile = useMediaQuery('(min-width:600px)')
  const coordinates = { lan: 0, lng: 0}
  return (
    // <div className={classes.mapContainer}>
    //   <GoogleMapReact 
    //   bootstrapURLKeys={{ key : process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
    //   defaultCenter={coordinates}
    //   center={coordinates}
    //   defaultZoom={14}
    //   margin={[50, 50, 50, 50]}
    //   options={''}
    //   onChange={''}
    //   onChildClick={''}
    //   >
    //   </GoogleMapReact>
    // </div>

    <LoadScript
      googleMapsApiKey= {process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>

  )
}
