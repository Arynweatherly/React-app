import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Animal.css";
import {firstLetterCase} from '../../modules/helpers'

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content" id="cardContent">
          <picture>
          <img src={require(`../../Images/animals/${this.props.animal.image}`)} alt="dog" />
          </picture>
          <h3>Pet Name: <span className="card-petname">{firstLetterCase(this.props.animal.name)}</span></h3>
          <p>Breed: {this.props.animal.breed}</p>
          <button type="button" className="deleteButton" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge</button>
          <button type="button" onClick={() => {this.props.history.push(`/animals/${this.props.animal.id}/edit`)}}>Edit</button>
          <Link to={`/animals/${this.props.animal.id}`}><button className="deleteButton">Details</button></Link>
        </div>
      </div>
    );
  }
}

export default AnimalCard;