import React, { Component } from "react";
import styles from "./MyCab.module.scss";
import Card from "../Card/Card";
import { firestore } from "../../firebase";

export default class MyCab extends Component {
    state = {
        myCards: []
    }

    componentDidMount() {
        firestore
            .collection("covid-19")
            .where("addedBy", "==", this.props.user.uid)
            .get()
            .then((query) => {
                const myCards = query.docs.map(doc => doc.data());
                this.setState({
                    myCards
                });
            })
    }
    render() {
        return (
            <>
                <div onClick={this.props.signOut} className={styles.google}>
                    <button>Sign out from google</button>
                </div>
                <section className={styles.card}>
                    {this.state.myCards.map((country) => (
                        <Card countryData={country} key={country.CountryCode} />
                    ))}
                </section>
            </>
        )
    }
}