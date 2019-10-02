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
          <h3>Kennel location: <span className="card-petname">{this.props.location.name}</span></h3>
          <button type="button" class="deleteButton" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Remove Location</button>
          <Link to={`/locations/${this.props.location.id}`}><button class="deleteButton">Details</button></Link>
        </div>
      </div>
    );
  }
}

export default LocationCard;