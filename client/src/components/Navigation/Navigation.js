import styles from './Navigation.module.css'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Context'
import { logout } from '../../services/authService'

const Navigation = (props) => {


    let usertoken = localStorage.getItem('token');
    // console.log("---------")
    // console.log("hasSesion = " + props.hasSession)

    // console.log("========")
    // console.log("props = " + props)

    // console.log("token : " + usertoken)

//     const [token , setToken ] = useState(usertoken)

// useEffect(() => {
//     logout()
//     .then(() => setToken(null))

// })

    

    // logout()
    //     .then(() => {
    //   
    //         localStorage.removeItem('token')
    //     })





    return (



        <div className={styles["topnav"]} >

            {props.isLoggedin &&( <Link to="/my-places">My places</Link> ) }
            {props.isLoggedin &&( <Link to="/add-place">Add place</Link> ) }
            {!props.isLoggedin &&( <Link to="/">TravelLover</Link> ) }
            {!props.isLoggedin &&( <Link to="/about-Us">About Us</Link> ) }
            {!props.isLoggedin&&(<Link to="/contact-us">Contact Us</Link> ) }

            <div className={styles["right-nav"]}>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/logout" >Logout</Link>


            </div>



        </div >


    )
}

export default Navigation