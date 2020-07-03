import React, { Component } from "react";
import firebase, { providers } from "../firebase";
import { Router, Redirect, globalHistory } from "@reach/router";
import CardList from "../Component/CardList/CardList";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../Component/Login/Login";
import MyCab from "../Component/MyCab/MyCab";

const NotFound = () => (<h2>Not Found</h2>);

export default class Routes extends Component {
    state = {
        user: null
    }

    signIn = () => {
        firebase
            .auth()
            .signInWithPopup(providers.google)
            .then(result => {
                this.setState({user: result.user});
                console.log(this.state.user)
                globalHistory.navigate("/private/mycabinet");
            })
            .catch(error => {
                console.log(error);
            })
    }

    signOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                this.setState({user: null});
                globalHistory.navigate("/home");
            })
    }

    render() {
        return (
            <Router>
                <Redirect noThrow from="/" to="home" />
                <CardList path="home" countryData={this.props.countryData} user={this.state.user}/>
                <Login path="login" signIn={this.signIn} />
                <PrivateRoutes path="private" user={this.state.user}> 
                    <MyCab path="mycabinet" user={this.state.user}  signOut={this.signOut} />
                </PrivateRoutes> 
                <NotFound default />
            </Router>
        );
    }
}