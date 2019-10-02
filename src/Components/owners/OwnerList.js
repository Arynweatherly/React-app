import React, { Component } from "react";
//import the components we will need
import OwnerCard from "./OwnerCard";
import OwnerManager from "../../modules/OwnerManager";
// import "./Employee.css";

class OwnerList extends Component {
    //define what this component needs to render
    state = {
        owners: []
    };

    deleteOwner = id => {
        OwnerManager.delete(id).then(() => {
            OwnerManager.getAll().then(newOwner => {
                this.setState({
                    owner: newOwner
                });
            });
        });
    };

    componentDidMount() {
        console.log("Employee LIST: ComponentDidMount");
        //getAll from EmployeeManager and hang on to that data; put it in state
        OwnerManager.getAll().then(owners => {
            this.setState({
                owners: owners
            });
        });
    }

    render() {
        console.log("Locations LIST: Render");

        return (
            <div className='container-cards'>
                {this.state.owners.map(owner => (
                    <OwnerCard key={owner.id} owner={owner} deleteOwner={this.deleteOwner} />
                ))}
            </div>
        );
    }
}

export default OwnerList;