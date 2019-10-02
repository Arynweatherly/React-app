import React, { Component } from 'react';
import { Link } from "react-router-dom";

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content" id="cardContent">
          <picture>
          </picture>
          <h3>Owner Name <span className="card-petname">{this.props.owner.name}</span></h3>
          <button type="button" className="deleteButton" onClick={() => this.props.deleteOwner(this.props.owners.id)}>Remove Owner</button>
          <button type="button" onClick={() => {this.props.history.push(`/owners/${this.props.owner.id}/edit`)}}>Edit</button>
          <Link to={`/owners/${this.props.owner.id}`}><button class="deleteButton">Details</button></Link>
        </div>
      </div>
    );
  }
}

export default OwnerCard;