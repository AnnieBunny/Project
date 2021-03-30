import styles from './HomeUser.module.css'
import Place from '../Place/Place'

const HomeUser = ({
 

   
}) => {
  
    return(
       
        <div className={styles["user-home"]}>
        <div className={styles["column"]}>
        <Place />
    </div>
    </div>

    )

}

export default HomeUser;