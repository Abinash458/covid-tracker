import React, { Component } from 'react'

import { Cards, Chart, CountryPicker } from "./components";

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>This is a Covid-19 Tracker</h1>
                <Cards/>
                <Chart/>
                <CountryPicker/>
            </div>
        );
    }
}
