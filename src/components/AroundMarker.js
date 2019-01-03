import React from 'react';
import { InfoWindow, Marker} from "react-google-maps"

export class AroundMarker extends React.Component {

  state = {
    isOpen: false,
  }

  toggleOpen = () => {
    this.setState((prevState) =>{
      return {
        isOpen: !prevState.isOpen
      }
    });
  }

  render() {
    const {lat , lon : lng} = this.props.post.location;
    return (
      <Marker
        position={{ lat, lng }}
        onMouseOver={this.toggleOpen}
        onMouseOut={this.toggleOpen}
      >
        {this.state.isOpen ? (
          <InfoWindow>
            <div>Content</div>
          </InfoWindow>
        ) : null}
      </Marker>
    );
  }
}