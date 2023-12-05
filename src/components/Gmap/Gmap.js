import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Gmap = (
  { centerLat = 35.6895, 
    centerLng = 139.6917, 
    zoomRate = 17, 
    mapHeight = "100vh",
    gmapApiKey 
  }
) => {

  
  const mapStyles = {
    height: mapHeight,
    width: "100%"
  };

  const centerPoint = {
    lat: centerLat,
    lng: centerLng
  };

  return (
    <LoadScript googleMapsApiKey={gmapApiKey}> 
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={centerPoint}
        zoom={zoomRate}
      >
        {/* センターポイントにマーカーを追加 */}
        <Marker position={centerPoint} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Gmap;
