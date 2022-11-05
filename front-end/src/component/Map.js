import React, { useEffect } from "react";
import L from "leaflet";
import '../App.css';
import './Map.css';
import './Canvas.css';
import Selector from './Selector';
import Button from './Button';

import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
iconUrl: icon,
shadowUrl: iconShadow,
});

var latlng = L.latLng(48.1500327, 11.5753989);

let text = `
    Location Name
    Location Address
    Location Type
    Location Description`;



function Map() {
useEffect(() => {
    var container = L.DomUtil.get("map");
    if (container != null) {
        container._leaflet_id = null;
    }
    var map = L.map("map").setView(latlng, 13);
    const isRetina = L.Browser.retina;
    const baseUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=f05457a48e8345d7b3084421d631d61d";
    const retinaUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey=f05457a48e8345d7b3084421d631d61d";
    L.tileLayer(isRetina ? retinaUrl : baseUrl,
    {
        attribution:
        'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>',
        maxZoom: 20,
        id: 'osm-bright',
    }).addTo(map);
    L.Marker.prototype.options.icon = DefaultIcon;
    var marker = L.marker(latlng).addTo(map);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
}, []);
return (<>
         <div className = 'd0'>
        <Selector></Selector>
        <div id="map" style={{ height: "50vh", width: "50vh" }}></div>
        <textArea className = 'textarea0'>{text}</textArea>
        <Button str_array = {['Group Information']} type = {6}></Button>
        </div>
        </>);
};

export default Map;