import React from "react"
import styles from "./rocket.sass"
import shuttle from "./shuttle.png"


export const Rocket = () => {
    return (
        <img src={shuttle} alt="shuttle" className={styles.img} />
    )
}
