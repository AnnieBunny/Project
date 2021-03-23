import styles from './Navigation.module.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (

        <div className={styles["topnav"]}>
            <Link to="/">TravelLover</Link>
            <Link to="/about-Us">About Us</Link>
            <Link to="/top-Places">TOP Places</Link>
            <Link to="/contct-us">Contact Us</Link>

            <div className={styles["right-nav"]}>
                <Link to="/login">Login</Link>
                <Link to="/register">Regiter</Link>
            </div>



        </div>


    )
}

export default Navigation