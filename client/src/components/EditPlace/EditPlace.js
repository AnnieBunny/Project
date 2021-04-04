import styles from './EditPlace.module.css'
import InputError from '../InputError/InputError'

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
                setPlace(res)
            });
    }, [])


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
        console.log(cityText);
        let regex = /^[A-za-z]+/;
      
        if (regex.test(cityText)) {
            setErrorMessageForCity('');

        } else {
            setErrorMessageForCity('Should be a letter and should start with upper character');

        }
        console.log(regex.test(cityText));

    };


    const [errorMessageForImageUrl, setErrorMessageForImageUrl] = useState('');

    const onImageUrlChangeHandler = (e) => {
        let imageURL = e.target.value;
        let regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
     

        if (regex.test(imageURL)) {
            setErrorMessageForImageUrl('');

        } else {
            setErrorMessageForImageUrl('Should be valid link adress');

        }
    };

    return (
        <div className={styles["backround-pic"]}>
            <div>
                <div className={styles["placeForm"]}>
                    <form onSubmit={onDescriptionSaveSubmit}>
                        <label htmlFor="country">City</label>
                        <br />
                        <InputError>{errorMessageForCity}</InputError>
                        <input type="country" name="country" defaultValue={place.country} onBlur={onCityChangeHandler}/>
                        <br />
                        <label htmlFor="description">Description</label>
                        <br />
                        <InputError>{errorMessage}</InputError>
                        <textarea type="text"
                            name="description" defaultValue={place.description} onBlur={onDescriptionChangeHandler} />
                        <br />
                        <InputError>{errorMessageForImageUrl}</InputError>

                        <label htmlFor="imageUrl">ImageUrl </label>
                        <br />

                        <input type="text" name="imageUrl" defaultValue={place.imageUrl} onBlur={onImageUrlChangeHandler} />
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