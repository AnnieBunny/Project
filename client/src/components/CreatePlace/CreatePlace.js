import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import styles from './CreatePlace.module.css'
import * as placeService from '../../services/placeService'
import InputError from '../InputError/InputError'

import { useState, useEffect } from 'react'
toast.configure()
const CreatePlace = ({
    history
}) => {
    const onCreatePlaceSbmit = (e) => {
        e.preventDefault();

        const { country, description, imageUrl } = e.target;
        placeService.create(country.value, description.value, imageUrl.value)
            .then(() => {
          
                history.push('/my-places');
            })
          

    };

    const [errorMessage, setErrorMessage] = useState('');

    const onDescriptionChangeHandler = (e) => {
        if (e.target.value.length < 5) {
            setErrorMessage('Description too short');
            toast.error("Description too short")

        } else {
            setErrorMessage('');
            
        }
    };

    const [errorMessageForCity, setErrorMessageForCity] = useState('');

    const onCityChangeHandler = (e) => {
        let cityText = e.target.value;
        console.log(cityText);
        let regex = /^[A-Z]+[a-zA-Z]*$/;


        if (regex.test(cityText)) {
            setErrorMessageForCity('');

        } else {
            setErrorMessageForCity('Should be a letter and should start with upper character');
            toast.error("Should be a letter and should start with upper character")

        }
    };


    const [errorMessageForImageUrl, setErrorMessageForImageUrl] = useState('');

    const onImageUrlChangeHandler = (e) => {
        let imageURL = e.target.value;
        let regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
      

        if (regex.test(imageURL)) {
            setErrorMessageForImageUrl('');

        } else {
            setErrorMessageForImageUrl('Should be valid link adress');
            toast.error("Should be valid link adress")
        }
    };

    
   
  
   

    return (

        <div className={styles["backround-pic"]}>
            <div>
                <div className={styles["placeForm"]}>
                    <form onSubmit={onCreatePlaceSbmit}>
                        <label htmlFor="country">City </label>
                        <br />
                        

                        <input type="country" name="country" onBlur={onCityChangeHandler} />
                        <br />

                        <label htmlFor="description">Description</label>
                        <br />
                       
                        <textarea type="text"
                            name="description" onBlur={onDescriptionChangeHandler} />
                        <br />

                        <label htmlFor="imageUrl">ImageUrl </label>
                        <br />
                        

                        <input type="text" name="imageUrl" onBlur={onImageUrlChangeHandler} />

                        <br />

                        <input id="submitPlace" type="submit" value="Submit" />

                        

                        <ToastContainer position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover />



                    </form>
                   
                </div>
            </div>
        </div>

    )
}

export default CreatePlace;