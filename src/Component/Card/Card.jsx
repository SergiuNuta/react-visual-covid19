import React, { Component } from "react";
import { Radar } from "react-chartjs-2";
import styles from "./Card.module.scss";
import { firestore } from "../../firebase";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { globalHistory } from "@reach/router";


export default class Card extends Component {
    state = {
        currentTime: new Date().toLocaleString()
    }

    handleSave = (event) => {
        event.preventDefault();
        if (this.props.user) {
            firestore
                .collection("covid-19")
                .add({
                    ...this.props.countryData,
                    addedBy: this.props.user.uid
                })
                .then(() => {
                    console.log("It worked!")
                    alert("Saved to your cabinet!")
                }) 
        } else {
            alert("Login first!")
            globalHistory.navigate("/login");
        }
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
        console.log(this.props.countryData)
        return (
            <>
                <section className={styles.card} key={this.props.countryData.CountryCode}>
                    <h2 className={styles.title}>{this.props.countryData.Country}
                        <FontAwesomeIcon
                            icon={faBookmark}
                            onClick={this.handleSave}
                            className={styles.icon} />
                    </h2>
                    <section className={styles.radar}>
                    <Radar data={data} />
                    </section>
                </section>
            </>
        )
    }
}