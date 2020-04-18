import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from "./components";
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/image.png'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            country: '',
        }
    }
    
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData})
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country})
    }

    render() {
        const {data, country} = this.state
        return (
            <div>
                <div className={styles.container}>
                    <img className={styles.image} src={coronaImage} alt="covid-19" />
                    <Cards data={data}/>
                    <CountryPicker handleCountryChange={this.handleCountryChange}/>
                    <Chart data={data} country={country}/>
                </div>
            </div>
        );
    }
}
