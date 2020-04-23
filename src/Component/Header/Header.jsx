import React, { Component } from "react";
import styles from "./Header.module.scss";


export default class Header extends Component {
    render() {
        const globalData = this.props.globalData;
        return (
            <>
                <div className={styles.head}>
                    <div>NewConfirmed: {globalData.NewConfirmed}</div>
                    <div>TotalConfirmed: {globalData.TotalConfirmed}</div>
                    <div>NewDeaths: {globalData.NewDeaths}</div>
                    <div>TotalDeaths: {globalData.TotalDeaths}</div>
                    <div>NewRecovered: {globalData.NewRecovered}</div>
                    <div>TotalRecovered: {globalData.TotalRecovered}</div>
                </div>
            </>
        )
    }
}