import PropTypes from 'prop-types';
import Three from "./three"
import styles from './two.module.css';

export default function Two({tasks,setTask}){
    if(tasks.length === 0){
        return(
            <b className={styles.list}>NO tasks assigned</b>
        )
    }
    else{

        const sorted = tasks.slice().sort((a,b) => Number(a.status)-Number(b.status))

        return(
            <div className={styles.list}>
            {sorted.map((item) =>(
                <Three key={item.name} item = {item} tasks={tasks} setTask={setTask}/>
            ) )}
            </div>
        )
    }
}

Two.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTask: PropTypes.func.isRequired
};

