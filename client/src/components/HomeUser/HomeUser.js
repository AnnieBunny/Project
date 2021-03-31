import {useState, useEffect} from 'react'

import styles from './HomeUser.module.css'
import Place from './PlaceCard/PlaceCard'

import {getAll} from '../../services/placeService'


const HomeUser = ({match}) => {

    let place = match.parms;

    const [places, setPlace] = useState([]);

    useEffect(()=>{
        getAll(place)
        .then(res => setPlace(res))
    }, [])
  
    return(
       
    <div className={styles["user-home"]}>
        <h1 id={styles["home-title"]}>Your dream list :)</h1>
            <div className = {styles["cardDiv"]}>
                {places.map(x => 
                <Place key={x.id} {...x} />  )}
            </div>
    </div>
   

    )

}

export default HomeUser;