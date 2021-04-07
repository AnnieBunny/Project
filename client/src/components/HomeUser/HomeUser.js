import { useState, useEffect } from 'react'
import {useUser} from '../../Context/Context'

import styles from './HomeUser.module.css'
import Place from './PlaceCard/PlaceCard'
import HomeUserWithoutPlaces from './HomeUserWithoutPlace/HomeUserWithoutPlaces'

import { getAll } from '../../services/placeService'


import {Redirect} from 'react-router-dom'


const HomeUser = ({ match }) => {
    let user = useUser();

    let place = match.parms;

    const [places, setPlace] = useState([]);

    useEffect(() => {
        getAll(place)
            .then(res => setPlace(res))
    }, []);



    return (
       
        <div className={styles["user-home"]}>
            <h1 id={styles["home-title"]}>Your dream list :)</h1>

      {places.length > 0  
          ?  (<div className={styles["cardDiv"]}>
                {places.map(x => <Place key={x._id} {...x} />)}
            </div>)
        : (<HomeUserWithoutPlaces/>)

}

        </div>


    );

}

export default HomeUser;