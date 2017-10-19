import React from "react"

import styles from "./grid-item.sass"


export const GridItem = props => {
    return (
        <div className={styles.card}>
            <h2>{props.item.title}</h2>
            <article className={styles.fact}>{props.item.fact}</article>
        </div>
    )
}
