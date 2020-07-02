import React, { Component } from "react";
import { Radar } from "react-chartjs-2";
import styles from "./Card.module.scss";

export default class Card extends Component {
    state = {
        currentTime: new Date().toLocaleString()
    }
    render() {
        let data = {
            labels: ['NewConfirmed', 'TotalConfirmed', 'NewDeaths', 'TotalDeaths', 'NewRecovered', 'TotalRecovered'],
            datasets: [
                {
                    label: `Current data ${this.state.currentTime}`,
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: [
                        this.props.countryData.NewConfirmed,
                        this.props.countryData.TotalConfirmed,
                        this.props.countryData.NewDeaths,
                        this.props.countryData.TotalDeaths,
                        this.props.countryData.NewRecovered,
                        this.props.countryData.TotalRecovered
                    ]
                }
            ]
        };
        return (
            <>
                <section className={styles.card}>
                    <h2 className={styles.title}>{this.props.countryData.Country}</h2>
                    <Radar data={data} />
                </section>
            </>
        )
    }
}