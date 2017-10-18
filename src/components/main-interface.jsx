import React, { Component } from "react"
import _ from "lodash"

import { Title } from "./title/title"
import { Background } from "./background/background"

import logo from "./logo.svg"
import styles from "./main-interface.sass"


export class MainInterface extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className={styles.app}>
                <header className={styles.appHeader}>
                    <img src={logo} className={styles.appLogo} alt="logo" />
                    <h1 className={styles.appTitle}>Welcome to React</h1>
                </header>
                <p className={styles.appIntro}>
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Title/>
                <Background/>
            </div>
        )
    }
}
