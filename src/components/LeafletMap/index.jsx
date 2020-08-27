import React, { Component } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

export default class LeafletMap extends Component {
  state = {
    lat: 45.4738094,
    lng: 9.0706156,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng];

    const myIcon = L.icon({
        iconUrl: 'https://lh3.googleusercontent.com/proxy/QP8R0DTkQBVjAe3WLcvgcGc0_DN1KTIcWh8YlxeIGQZmU-_vtPiL6VuVSLnS7_naYzsk_JIyXzc_c-8Cx8y8GU04z6ljJNmlgckpG7GKfLpINAmwmuoL7M2rRV7xj9fbyWU',
        iconSize: [25, 41],
    });

    return (
        <Map 
            className="leafletMap" 
            worldCopyJump={true}
            center={position} 
            zoom={this.state.zoom}
        >
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker 
                position={position}
                icon={myIcon}
            >
                <Popup>
                    that's us!
                </Popup>
            </Marker>
        </Map>
    );
  }
}
