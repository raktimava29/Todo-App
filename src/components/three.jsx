import PropTypes from 'prop-types';
import styles from './two.module.css';

export default function Three({item, setTask, tasks}){

    function dele(item){
            //console.log(item)  {item} will be deleted 
            setTask(tasks.filter((task) => task !== item))
            
    }

function completed(item){
        setTask(tasks.map((task) => {
            if(task.name === item){
                return{
                    ...task,
                    status: !task.status
                }
            }
            return task
        }))
}

        const abc = item.status ? styles.strike:" "

        return(
            <div>
                <b className={abc} onClick={() => completed(item.name)}>{item.name}</b>
                <button onClick={() =>  dele(item)} className={styles.three}>X</button>
                <hr></hr>
            </div>
        )
    
}

Three.propTypes = {
    item: PropTypes.object.isRequired,
    setTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
};

