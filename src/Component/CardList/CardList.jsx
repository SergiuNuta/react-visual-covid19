import React, { Component } from "react";
import Card from "../Card/Card";
import styles from "./CardList.module.scss"

export default class CardList extends Component {
    render() {
        return (
            <>
                {this.props.countryData ? (
                    <section className={styles.cards}>
                        {this.props.countryData.map((country, index) => (
                            <Card countryData={country} key={index} user={this.props.user}/>
                        ))}
                    </section>) : (
                        <h1>Loading data...</h1>
                    )}
            </>
        )
    }
}