
import styles from './CreatePlace.module.css'
import * as placeService from '../../services/placeService'

const CreatePlace = ({
    history
}) => {
    const onCreatePlaceSbmit = (e) => {
        e.preventDefault();

        const {country, description, imageUrl} = e.target;
        placeService.create(country.value, description.value, imageUrl.value)
        .then(() => {
            history.push('/');
        })
        

        

    }

    return (
        <div className={styles["backround-pic"]}>
        <div>
        <div className={styles["placeForm"]}>
            <form onSubmit={onCreatePlaceSbmit}>
                <label htmlFor="country">Country </label>
                <br/>
                <input type="country" name="country"/>
                <br/>

                <label htmlFor="description">Description</label>
                <br/>
                <textarea type="text"
                       name="description"/>
                <br/>

                <label htmlFor="imageUrl">ImageUrl </label>
                <br/>
                <input type="text" name="imageUrl"/>
                <br/>

                <input id="submitPlace" type="submit"/>
                <p className="error-notification"></p>

            </form>
        </div>
    </div>

    </div>
    )
}

export default CreatePlace;