import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
import LocationList from './locations/LocationList';
import OwnerList from './owners/OwnerList'
import AnimalList from './animals/AnimalList';
import AnimalDetail from './animals/AnimalDetail';
import EmployeeList from './employees/EmployeeList';
import LocationDetail from './locations/LocationDetail';
import AnimalForm from './animals/AnimalForm'
import Login from './auth/Login'

class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null


  render() {
    return (
      <React.Fragment>
      <Route path="/login" component={Login} />
      <Route exact path="/" render={(props) => {
          return <Home />
        }} />
      <Route exact path="/animals" render={props => {
    if (this.isAuthenticated()) {
        return <AnimalList {...props} />
    } else {
        return <Redirect to="/login" />
    }
}} />
      <Route path="/animals/:animalId(\d+)" render={(props) => {
  // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)}/>
        }} />
        <Route path="/animals/new" render={(props) => {
            return <AnimalForm {...props} />
        }} />
         <Route exact path="/employees" render={props => {
          if (this.isAuthenticated()) {
        return <EmployeeList {...props} />
            } else {
            return <Redirect to="/login" />
        }
        }} />
        <Route exact path="/owners" render={props => {
    if (this.isAuthenticated()) {
        return <OwnerList {...props} />
    } else {
        return <Redirect to="/login" />
    }
}} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
  // Pass the animalId to the AnimalDetailComponent
          return <LocationDetail locationId={parseInt(props.match.params.locationId)}/>
        }} />
         <Route exact path="/locations" render={props => {
    if (this.isAuthenticated()) {
        return <  LocationList {...props} />
    } else {
        return <Redirect to="/login" />
    }
}} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews