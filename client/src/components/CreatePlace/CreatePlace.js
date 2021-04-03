
import styles from './CreatePlace.module.css'
import * as placeService from '../../services/placeService'
import InputError from '../InputError/InputError'

import {useState, useEffect} from 'react'

const CreatePlace = ({
    history
}) => {
    const onCreatePlaceSbmit = (e) => {
        e.preventDefault();

        const {country, description, imageUrl} = e.target;
        placeService.create(country.value, description.value, imageUrl.value)
        .then(() => {
            history.push('/my-places');
        })
       
    };

    const [errorMessage, setErrorMessage] = useState('');

    const onDescriptionChangeHandler = (e) => {
        if (e.target.value.length < 5) {
            setErrorMessage('Description too short');
        } else {
            setErrorMessage('');
        }
    };

    const [errorMessageForCity, setErrorMessageForCity] = useState('');

    const onCityChangeHandler = (e) => {
        let cityText = e.target.value;
        let regex = /^[A-za-z]+/;
        regex.test(cityText)

        if (cityText) {
            setErrorMessageForCity('Should be a letter and should start with upper character');
        } else {
            setErrorMessageForCity('');
        }
    };


    const [errorMessageForImageUrl, setErrorMessageForImageUrl] = useState('');

    const onImageUrlChangeHandler = (e) => {
        let imageURL = e.target.value;
        let regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
        regex.test(imageURL)

        if (imageURL) {
            setErrorMessageForImageUrl('Should be valid link adress');
        } else {
            setErrorMessageForImageUrl('');
        }
    };


    return (
        
        <div className={styles["backround-pic"]}>
        <div>
        <div className={styles["placeForm"]}>
            <form onSubmit={onCreatePlaceSbmit}>
                <label htmlFor="country">City </label>
                <br/>
                <InputError>{errorMessageForCity}</InputError>

                <input type="country" name="country" onBlur={onCityChangeHandler}/>
                <br/>
               
                <label htmlFor="description">Description</label>
                <br/>
                <InputError>{errorMessage}</InputError>
                <textarea type="text"
                       name="description" onBlur={onDescriptionChangeHandler}/>
                <br/>

                <label htmlFor="imageUrl">ImageUrl </label>
                <br/>
                <InputError>{errorMessageForImageUrl}</InputError>
                   
                <input type="text" name="imageUrl" onBlur={onImageUrlChangeHandler}/>
                <br/>
                
                <input id="submitPlace" type="submit" value="Submit"/>
              

            </form>
        </div>
    </div>
    </div>

    )
}

export default CreatePlace;