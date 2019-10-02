import React, { Component } from 'react';
import { Link } from "react-router-dom";

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content" id="cardContent">
          <picture>
          <img src={require(`../../Images/employees/${this.props.employee.image}`)} alt="employee" />
          </picture>
          <h3>Employee Name: <span className="card-petname">{this.props.employee.name}</span></h3>
          <p>Role: {this.props.employee.role}</p>
          <button type="button" className="deleteButton" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Fire</button>
          <button type="button" onClick={() => {this.props.history.push(`/employees/${this.props.employee.id}/edit`)}}>Edit</button>
          <Link to={`/employees/${this.props.employee.id}`}><button className="deleteButton">Details</button></Link>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;