import styles from './EditPlace.module.css'

import { useState, useEffect } from 'react'

import * as placeService from '../../services/placeService'


const EditPlace = ({
    match,
    history,
}) => {


    const [place, setPlace] = useState({});
    useEffect(() => {
        placeService.getOne(match.params.id)
            .then(res => {
                setPlace(res)});
    }, [])

console.log(place);
    const onDescriptionSaveSubmit = (e) => {
        e.preventDefault();
      


      

        let updatedPlace = {
            country: e.target.country.value,
            description: e.target.description.value,
            imageUrl: e.target.imageUrl.value
        };

     

        placeService.update(match.params.id, updatedPlace)
            .then((res) => {
            
                history.push(`/my-places`);
               
                return;
            });
    }


    // const onDescriptionChangeHandler = (e) => {
    //     console.log(e.target.value);

    //     if (e.target.value.length < 10) {
    //         setErrorMessage('Description too short');
    //     } else {
    //         setErrorMessage('');
    //     }
    // };

    return (
        <div className={styles["backround-pic"]}>
            <div>
                <div className={styles["placeForm"]}>
                    <form onSubmit={onDescriptionSaveSubmit}>
                        <label htmlFor="country">City</label>
                        <br />
                        <input type="country" name="country" defaultValue={place.country} />
                        <br />

                        <label htmlFor="description">Description</label>
                        <br />
                        <textarea type="text"
                            name="description" defaultValue={place.description}/>
                        <br />

                        <label htmlFor="imageUrl">ImageUrl </label>
                        <br />
                        <input type="text" name="imageUrl" defaultValue={place.imageUrl}/>
                        <br />

                        <input id="submitPlace" type="submit" value="Submit" />
                        <p className="error-notification"></p>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditPlace