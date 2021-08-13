// import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from "react-router-dom"
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';

import countriesList from "./countries.json";

export class App extends Component {
  state = {
      countries : countriesList
  }

  render() {
    const countriesList = this.state.countries
    
    return (
      <div className="App">
      <Navbar />


      <Switch>
        <Route exact path="/">
          <CountriesList 
            country={countriesList}/>
        </Route>
        <Route path="/:cca3" component={CountryDetails} />
      </Switch>
    </div>

    
    )
  }
}

export default App;
