import React, { Component } from "react"

import styles from './grid.sass'
import { GridItem } from "./grid-item"


export class Grid extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const factItems = this.props.facts.map(item => {
            return (
                <GridItem key={item.id} item={item} updateClicked={id => this.props.updateClicked(id)} />
            )
        })
        return (
            <section className={styles.grid}>
                {factItems}
            </section>
        )
    }
}
