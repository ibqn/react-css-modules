import React from "react"
import styles from "./background.css"


export const Background = () => {
    return (
        <div>
            <h1>
                background
            </h1>
            <div className={styles.stars}></div>
            <div className={styles.alpha}></div>
            <div className={styles.nebula}></div>
        </div>
    )
}
