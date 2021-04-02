import styles from './PlaceCard.module.css'
import {Link} from 'react-router-dom'
import {deletePlace} from '../../../services/placeService'

// import {Redirect} from 'react-router-dom'

const Place = ({
  _id,
    country,
    description,
    imageUrl,
    history
  

}) => {

 
    const onDeleteHandler = () =>{
        console.log(33333333)
  
        console.log( history)
        deletePlace(_id)
        .then(()=> history.push('/'))
        .catch(err => console.log(err))
    
    

    }



    return (
        <div className={styles["column"]}>
        <div className={styles["card"]}>
            <img src={imageUrl} alt="bora-bora" width="300" height="200"/>
            <div className={styles["container"]}>
                <h2 id={styles["town-info"]}>{country}</h2>
                <p id={styles["town-info"]}>{description}</p>
                <div className={styles["pet-info"]}>
                <Link to={`/places/weather/${country}`}><button className={styles["button"]}>Weather</button></Link>
                <Link to={`/pets/details/`}><button className={styles["button"]}>Edit</button></Link>
                <Link to={`/places/delete/${_id}`}><button className={styles["button"]} onClick={onDeleteHandler}>Delete</button></Link>

            </div>
            </div>
        
        </div>
       
        </div>
    )
}

export default Place;