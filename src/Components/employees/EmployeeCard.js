import React, { Component } from 'react';
import { Link } from "react-router-dom";

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content" id="cardContent">
          <picture>
          <img src={require(`${this.props.employee.url}`)} alt="Sue" />
          </picture>
          <h3>Employee Name: <span className="card-petname">{this.props.employee.name}</span></h3>
          <p>Role: {this.props.employee.role}</p>
          <button type="button" class="deleteButton" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Fire</button>
          <Link to={`/employees/${this.props.employee.id}`}><button class="deleteButton">Details</button></Link>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;