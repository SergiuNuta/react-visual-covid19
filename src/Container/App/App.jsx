import React, { Component } from 'react';
import styles from "./App.module.scss";
// import Card from '../../Component/Card/Card';
import axios from 'axios';
import SearchBar from "../../Component/SearchBar/SearchBar";
import Header from "../../Component/Header/Header";
// import CardList from '../../Component/CardList/CardList';
import Routes from '../../routes/Routes';

export default class App extends Component {
  state = {
    countries: [],
    global: [],
    searchText: [],
    filteredCountry: [],
    api: "https://api.covid19api.com/summary"
  }

  setSearchText = event => {
    event.preventDefault();
    const searchText = event.target.value.toLowerCase();
    axios.get(this.state.api)
    .then(res => {
      this.setState({
        countries: res.data['Countries'],
        searchText,
        filteredCountry: res.data['Countries']
      }, this.filteredCountry)
    })
    .catch(error => {
      console.log(error)
    })
    // this.setState({ ...this.state, searchText }, this.filteredCountry);
  }

  filteredCountry = () => {
    const filteredCountry = this.state.countries.filter(country => {
      return country.Country.toLowerCase().includes(this.state.searchText);
    });
    this.setState({ filteredCountry });
  }

  async componentDidMount() {
    const res = await axios.get(this.state.api);
    this.setState({
      // countries: res.data['Countries'],
      global: res.data['Global'],
      // filteredCountry: res.data['Countries']
    });
  }
  render() {
    return (
      <>
      <section className={styles.app}>
        <Header globalData={this.state.global} />
        <SearchBar setSearchText={this.setSearchText} />
        {/* <CardList  countryData={this.state.filteredCountry} /> */}
        <Routes countryData={this.state.filteredCountry} />
        </section>
      </>
    );
  }
}
