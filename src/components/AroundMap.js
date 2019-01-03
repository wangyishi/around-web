import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from "react-google-maps";
import {AroundMarker} from './AroundMarker'
import {POS_KEY} from '../constants'

class NormalAroundMap extends React.Component {

  reloadMarkers =() => {
    const center = this.getCenter();
    this.props.loadNearbyPosts(center);
  }

  getMapRef = (mapInstance) => {
    this.map = mapInstance;
  }


  getCenter = () => {
    const center = this.map.getCenter();
    return {lat: center.lat(), lon: center.lng()}
  }

  render() {
    const { lat, lon : lng} = JSON.parse(localStorage.getItem(POS_KEY));
    return (
      <GoogleMap
        ref={this.getMapRef}
        defaultZoom={11}
        defaultCenter={{ lat, lng}}
        onDragEnd={this.reloadMarkers}
      >
        {this.props.posts.map((post) => <AroundMarker post={post} key={post.url}/>)}
      </GoogleMap>
    );
  }
}

export const AroundMap = withScriptjs(withGoogleMap(NormalAroundMap));