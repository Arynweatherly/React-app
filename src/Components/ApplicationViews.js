import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
import LocationList from './locations/LocationList';
import OwnerList from './owners/OwnerList'
import OwnerForm from './owners/OwnerForm'
import AnimalList from './animals/AnimalList';
import AnimalDetail from './animals/AnimalDetail';
import EmployeeList from './employees/EmployeeList';
import LocationDetail from './locations/LocationDetail';
import LocationForm from './locations/LocationForm'
import AnimalForm from './animals/AnimalForm'
import EmployeeForm from './employees/EmployeeForm'
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
         <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />

        <Route exact path="/owners" render={props => {
    if (this.isAuthenticated()) {
        return <OwnerList {...props} />
    } else {
        return <Redirect to="/login" />
    }
}} />
  <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props} />
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
    <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews