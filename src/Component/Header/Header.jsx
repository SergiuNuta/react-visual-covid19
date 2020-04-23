import React, { Component } from "react";
import styles from "./Header.module.scss";


export default class Header extends Component {
    render() {
        const globalData = this.props.globalData;
        return (
            <>
                <div className={styles.head}>
                    <div><span>NewConfirmed:</span> {globalData.NewConfirmed}</div>
                    <div><span>TotalConfirmed:</span> {globalData.TotalConfirmed}</div>
                    <div><span>NewDeaths:</span> {globalData.NewDeaths}</div>
                    <div><span>TotalDeaths:</span> {globalData.TotalDeaths}</div>
                    <div><span>NewRecovered:</span> {globalData.NewRecovered}</div>
                    <div><span>TotalRecovered:</span> {globalData.TotalRecovered}</div>
                </div>
            </>
        )
    }
}