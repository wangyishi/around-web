import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from "react-google-maps";
import {AroundMarker} from './AroundMarker'

class NormalAroundMap extends React.Component {


  render() {
    return (
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      >
        <AroundMarker position={{ lat: -34.394, lng: 150.624 }}/>
        <AroundMarker position={{ lat: -34.347, lng: 150.614 }}/>
        <AroundMarker position={{ lat: -34.337, lng: 150.684 }}/>
      </GoogleMap>
    );
  }
}

export const AroundMap = withScriptjs(withGoogleMap(NormalAroundMap));