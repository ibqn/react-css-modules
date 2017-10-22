import React from "react"
import styles from "./smoke.sass"
import smoke from "./smoke.mov"


export const Smoke = () => {
    return (
        <div className={styles.smoke}>
            <video src={smoke} className={styles.video} autoPlay loop></video>
        </div>
    )
}
