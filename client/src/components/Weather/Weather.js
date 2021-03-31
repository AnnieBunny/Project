import styles from './Weather.module.css'
const Weather = () => {

    return (
        <div className={styles["user-home"]}>
            <div class={styles["container"]}>
                <h2 id={styles["weather-title"]}>The weather is </h2>

            </div>
            <div className={styles["forecast-table"]}>
                <div className={styles["container"]}>
                    <div className={styles["forecast-container"]}>
                        <div className={styles["today forecast"]}>
                            <div className={styles["forecast-header"]}>
                               
                            </div>

                            <div className={styles["forecast-content"]}>
                                <div className={styles["location"]}>New York</div>
                                
                            </div>
                        </div>
                        <div className={styles["forecast"]}>
                            <div className={styles["forecast-header"]}>
                                <div className={styles["day"]}>Tuesday</div>
                            </div>
                            <div className={styles["forecast-content"]}>

                                <div className={styles["degree"]}>23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
                        <div className={styles["forecast"]}>
                            <div className={styles["forecast-header"]}>
                                <div className={styles["day"]}>Wednesday</div>
                            </div>
                            <div className={styles["forecast-content"]}>

                                <div className={styles["degree"]}>23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
                        <div className={styles["forecast"]}>
                            <div className={styles["forecast-header"]}>
                                <div className={styles["day"]}>Thursday</div>
                            </div>
                            <div className={styles["forecast-content"]}>

                                <div className={styles["degree"]}>23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
                        <div className={styles["forecast"]}>
                            <div className={styles["forecast-header"]}>
                                <div className={styles["day"]}>Friday</div>
                            </div>
                            <div className={styles["forecast-content"]}>

                                <div className={styles["degree"]}>23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
                        <div className={styles["forecast"]}>
                            <div className={styles["forecast-header"]}>
                                <div className={styles["day"]}>Saturday</div>
                            </div>
                            <div className={styles["forecast-content"]}>

                                <div className={styles["degree"]}>23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
                        <div className={styles["forecast"]}>
                            <div className={styles["forecast-header"]}>
                                <div className={styles["day"]}>Sunday</div>
                            </div>
                            <div className={styles["forecast-content"]}>

                                <div className={styles["degree"]}>23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Weather