import styles from "./footer.module.css"
import PropTypes from 'prop-types';

export default function Foot({completed , total}){
    return(
        <div className={styles.foot}>
            <b className={styles.aa}>Total Tasks: {total}</b>
            <b className={styles.bb}>Completed Tasks: {completed}</b>
        </div>
    )
}

Foot.propTypes = {
    completed: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
};