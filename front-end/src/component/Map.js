import React, { useEffect } from "react";
import L from "leaflet";
import '../App.css';
import './Map.css';
import './Canvas.css';
import Selector from './Selector';
import Button from './Button';
import {useLocation} from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
iconUrl: icon,
shadowUrl: iconShadow,
});

const Map = () => {

    const {state} = useLocation();

    //const [text, setText] = React.useState('Loading...');

    useEffect(() => {
        console.log('state', state);
    let placeName = ('placeName' in state) ? state.placeName : state.name;
        const locdes = ReactDOM.createRoot(
            document.getElementById('locdes')
          );
          const element = (
          <>
          <h1>{placeName}</h1>
          <p>{state.address2}</p>
          <p>{state.neighbourhood}</p>
          </>);
          locdes.render(element);
    let longitude = ('coordinate' in state) ? state.coordinate.longitude : state.longitude;
    let latitude = ('coordinate' in state) ? state.coordinate.latitude : state.latitude;
    var latlng = L.latLng(longitude, latitude);
    var container = L.DomUtil.get("map");
    if (container != null) {
        container._leaflet_id = null;
    }
    var map = L.map("map").setView(latlng, 13);
    const isRetina = L.Browser.retina;
    const baseUrl = `${process.env.REACT_APP_MAP_URL}/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${process.env.REACT_APP_MAP_KEY}`;
    const retinaUrl = `${process.env.REACT_APP_MAP_URL}/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey=${process.env.REACT_APP_MAP_KEY}`;
    L.tileLayer(isRetina ? retinaUrl : baseUrl,
    {
        attribution:
        `Powered by <a href="${process.env.REACT_APP_GEOAPIFY_W3_URL}" target="_blank">Geoapify</a> | © OpenStreetMap <a href="${process.env.REACT_APP_OPEN_STREET_URL}/copyright" target="_blank">contributors</a>`,
        maxZoom: 20,
        id: 'osm-bright',
    }).addTo(map);
    L.Marker.prototype.options.icon = DefaultIcon;
    var marker = L.marker(latlng).addTo(map);
    marker.bindPopup(`<b>${placeName}</b><br>Is this where you want to go?`).openPopup();
    }, [state]);
//<textarea className = 'textarea0'>{text}</textarea>
return (<>
         <div className = 'd0'>
        <Selector></Selector>
        <div id = 'map' style = {{width: '345px', height: '345px'}}></div>
        <div className='textarea0' id = 'locdes'></div>
        <Button str_array = {['Group Information']} type = {6}></Button>
        </div>
        </>);
};

export default Map;