import React, { Component } from "react";
//import the components we will need
import EmployeeCard from "./EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager";
// import "./Employee.css";

class EmployeeList extends Component {
    //define what this component needs to render
    state = {
        employees: []
    };

    deleteEmployee = id => {
        EmployeeManager.delete(id).then(() => {
            EmployeeManager.getAll().then(newEmployees => {
                this.setState({
                    employees: newEmployees
                });
            });
        });
    };

    componentDidMount() {
        console.log("Employee LIST: ComponentDidMount");
        //getAll from EmployeeManager and hang on to that data; put it in state
        EmployeeManager.getAll().then(employees => {
            this.setState({
                employees: employees
            });
        });
    }

    render() {
        console.log("Employee LIST: Render");

        return (
            <div className='container-cards'>
                {this.state.employees.map(employee => (
                    <EmployeeCard key={employee.id} employee={employee} deleteEmployee={this.deleteEmployee} />
                ))}
            </div>
        );
    }
}

export default EmployeeList;