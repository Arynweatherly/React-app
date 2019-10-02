import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content" id="cardContent">
          <picture>
            <img src={require('./map.png')} alt="Map" />
          </picture>
          <h3>Kennel location: <span className="card-petname">{this.props.localtaco.name}</span></h3>
          <button type="button" className="deleteButton" onClick={() => this.props.deleteLocation(this.props.localtaco.id)}>Remove Location</button>
          <button type="button" onClick={() => {this.props.history.push(`/locations/${this.props.localtaco.id}/edit`)}}>Edit</button>
          <Link to={`/locations/${this.props.localtaco.id}`}><button className="deleteButton">Details</button></Link>
        </div>
      </div>
    );
  }
}

export default LocationCard;