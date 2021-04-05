import {Link} from 'react-router-dom'
import styles from './HomeUserWithoutPlaces.module.css'

const HomeUserWithoutPlces = () => {

    return(
        <div className={styles["user-home"]}>
             <div className={styles["home-info"]} >
                        <h2 id={styles["h2-home-text"]}> Create your place</h2>
                        <h4 id={styles['landing-text']}>
                            <Link to="/add-place">Add place</Link></h4>
                    </div>


        </div>

    )

}

export default HomeUserWithoutPlces;