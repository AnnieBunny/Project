import styles from './InputError.module.css';

const InputError = ({
    children,
}) => {
    if (!children) {
        return null;
    }

    return (
        <div className={styles["input-error"]}>{children}</div>
    );
}

export default InputError;