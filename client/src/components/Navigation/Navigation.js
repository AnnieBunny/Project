import styles from './Navigation.module.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (

        <div className={styles["topnav"]}>
            <Link to="/">TravelLover</Link>
            <Link to="/about-Us">About Us</Link>
            ---------------------------------------
            <Link to="/top-Places">TOP Places</Link>
            <Link to="/my-places">My places</Link>
            <Link to="/add-place">Add place</Link>

            

            <div className={styles["right-nav"]}>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/logout">Logout</Link>


            </div>



        </div>


    )
}

export default Navigation