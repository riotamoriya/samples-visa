import React from 'react';

import * as styles from './Gmap.module.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Gmap = ({centerLat = 35.6895, centerLng = 139.6917} ) => {
  const mapStyles = {
    height: "100vh",
    width: "100%"
  };

  const centerPoint = {
      lat: centerLat,
      lng: centerLng 
  }

  return (
    <LoadScript googleMapsApiKey=''> 
      <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={centerPoint}
      />
    </LoadScript>
  );
};

export default Gmap;
