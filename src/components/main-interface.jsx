import React, { Component } from "react"
import _ from "lodash"

import { Title } from "./title/title"
import { Background } from "./background/background"
import { Grid } from "./grid/grid"

import logo from "./logo.svg"
import styles from "./main-interface.sass"


export class MainInterface extends Component {
    constructor(props) {
        super(props)

        this.state = { nasaFacts: [] }
    }

    componentDidMount() {
        fetch('./nasa-facts.json', { method: 'get' })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Network response was not ok.');
            })
            .then(json => {
                this.setState({ nasaFacts: json })
            })
            .catch(error => console.error(error))
    }

    updateClicked = id => this.setState(prevState => {
        const nasaFacts = prevState.nasaFacts
        nasaFacts[id].clicked = true
        //console.log(nasaFacts)
        return { nasaFacts }
    })

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
                <Grid facts={this.state.nasaFacts} updateClicked={this.updateClicked}/>
            </div>
        )
    }
}
