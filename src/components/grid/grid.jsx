import React, { Component } from "react"
import classNames from "classnames"

import styles from './grid.sass'
import mediaStyles from './media.sass'
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
        const allStyles = classNames(styles.grid, mediaStyles.grid)
        return (
            <section className={allStyles}>
                {factItems}
            </section>
        )
    }
}
