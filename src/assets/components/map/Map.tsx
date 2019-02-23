import React, { Component } from 'react';
import L from 'leaflet';
import './leaflet.css';
import Creatable from 'react-select/lib/Creatable';

interface Props {
  editable: boolean;
}
interface State {
  value: string;
  options: any[];
}
class Map extends Component <Props, State> {
  constructor (props : Props) {
    super(props);
    this.state = {
      value: '',
      options: []
    }
  }
  componentDidMount = () => {
    var map = L.map('map').setView([62.393801, 17.283699], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    map.on('click', (event) => this.onMapClick(map, event));

  }
  onMapClick = (map : any, event : any) => {
    map.eachLayer((l : any) => l.options.radius && map.removeLayer(l));
    const { lat, lng } = event.latlng;
    let layer = L.circle([lat, lng], { radius: 10 }).bindPopup('Coordinate: ' + lat + ',' + lng).addTo(map);

    this.setState({ ...this.state, value: lat + ',' + lng });
  }
  updateValue = (value : string) => {
    this.setState({ ...this.state, value });
  }
  queryMeetingPoint = (value : string) => {
    if (value.length < 2) { return; }
    fetch('https://nominatim.openstreetmap.org/search?format=json&limit=5&q=' + value)
    .then((j : any) => j.json())
    .then((points : any[]) => points.map((point : any) => {
      return {
        label: point.display_name,
        value: point.lat + ',' + point.lng
      }
    }))
    .then((points : any[]) => {
      this.setState({ ...this.state, options: points });
    });
  }
  renderEditableContent = () => {
    return (
      <React.Fragment>
        <label htmlFor="meetingPoint">Meeting point</label>
        <Creatable id="meetingPoint" value={this.state.value} onInputChange={this.queryMeetingPoint} onChange={this.updateValue}
          options={this.state.options} />
      </React.Fragment>
    );
  }
  render = () => {
    const { editable } = this.props;
    return (
      <div>
        {editable && this.renderEditableContent()}
        <div id="map" style={{ height: '250px', width: '100%', zIndex: 0 }}></div>
      </div>
    )
  }
}

export default Map;