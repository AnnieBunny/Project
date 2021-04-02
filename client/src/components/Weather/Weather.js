import styles from './Weather.module.css'
import { useEffect, useState } from 'react'
import { getWeather } from '../../services/weatherService';

const Weather = ({ match }) => {

    const [temp, setTemp] = useState(0);

    useEffect(() => {
        getWeather(match.params.city)

            .then(res => {
                let tempInCel =(Number(res['main']['temp']) - 273.15).toFixed(0);
                console.log(tempInCel)
                setTemp(tempInCel);
               

            })
    }, [match.params.city])
   



    return (
        <div className={styles["user-home"]}>
            <div class={styles["container"]}>
                <h2 id={styles["weather-title"]}>The weather today</h2>
            </div>
            <div className={styles["forecast-table"]}>
                <div className={styles["container"]}>
                    <div className={styles["forecast-container"]}>
                        <div className={styles["today forecast"]}>
                            <div className={styles["forecast-header"]}>
                            </div>

                            <div className={styles["forecast-content"]}>
                                <div className={styles["location"]}>{match.params.city}</div>

                            </div>
                        </div>


                        <div className={styles["forecast"]}>

                            <div className={styles["forecast-content"]}>

                                <div className={styles["degree"]}>{temp}<sup>o</sup>C</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Weather