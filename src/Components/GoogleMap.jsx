import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React from "react";

export class GoogleMaps extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div> 
            {/* <h1>{this.state.selectedPlace.name}</h1> */}
             </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA4oMHVjCL6B3H14NAqwI6Id7hWEa08XuY",
})(GoogleMaps);
