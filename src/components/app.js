import React, { Component } from 'react';

import MyHeader from './header';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <MyHeader />
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
