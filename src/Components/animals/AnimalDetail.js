import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';


class AnimalDetail extends Component {

    state = {
        name: "",
        breed: "",
        employeeId: "",
        loadingStatus: true,
    }

    componentDidMount(){
        console.log("AnimalDetail: ComponentDidMount");
        //get(id) from AnimalManager and hang on to that data; put it into state
        AnimalManager.get(this.props.animalId)
        .then((animal) => {
            this.setState({
                name: animal.name,
                breed: animal.breed,
                image: animal.image,
                employeeId: animal.employeeId,
                loadingStatus: false
            });
        });
    }

    render() {
      if (this.state.loadingStatus) return <p>loading...</p>;
      return (
        <div className="card">
          <div className="card-content">
            <picture>
            <img src={require(`../../Images/animals/${this.state.image}`)} alt="dog" />
            </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Breed: {this.state.breed}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
          </div>
        </div>
      );
    }
}

export default AnimalDetail;