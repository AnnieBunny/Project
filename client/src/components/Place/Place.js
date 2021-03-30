import styles from './Place.module.css'

const Place = ({
    country,
    description,
    imageUrl
}) => {

    return (
        <div className={styles["card"]}>
            <img src={imageUrl} alt="bora-bora" width="300" height="200"/>
            <div className={styles["container"]}>
                <h2 id={styles["town-info"]}>{country}</h2>
                <p id={styles["town-info"]}>{description}</p>
            </div>
        </div>
    )
}

export default Place;