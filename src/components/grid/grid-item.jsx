import React from "react"

import styles from "./grid-item.sass"
import { Badge } from "./badge"
import { Explorer } from "./explorer"


export const GridItem = props => {
    return (
        <div className={styles.card} onClick={() => props.updateClicked(props.item.id)}>
            {props.item.clicked ? <Explorer/> : <Badge/>}
            <h2>{props.item.title}</h2>
            <article className={styles.fact}>{props.item.fact}</article>
        </div>
    )
}
