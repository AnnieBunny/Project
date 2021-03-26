
import styles from './CreatePlace.module.css'

const CreatePlace = () => {

    return (
        <div className={styles["backgroundImg"]}>
        <section className={styles["create"]}>
            <form >
                <fieldset>
                    <legend>Add new dream place</legend>
                    <p className={styles["field"]}>
                        <label htmlFor="country">Country</label>
                        <span className="input">
                            <input type="text" name="country" id="country" placeholder="Country" />
                            <span className={styles["actions"]}></span>
                        </span>
                    </p>
                    <p className={styles["field"]}>
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea rows="4" cols="45" type="text" name="description" id="description"
                                placeholder="Description"></textarea>
                            <span className={styles["actions"]}></span>
                        </span>
                    </p>
                    <p className={styles["field"]}>
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageURL" id="image" placeholder="Image" />
                            <span className="actions"></span>
                        </span>
                    </p>
                   
                    <input className={styles["button"]} type="submit" value="Add place" />
                </fieldset>
            </form>
        </section>
        </div>
    )
}

export default CreatePlace;