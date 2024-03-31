import { useState } from "react";
import PropTypes from 'prop-types';
import styles from './one.module.css';

export default function One({tasks,setTask}){
    const[val,setVal] = useState({name:" " , status: false})    

    function click(){
        setTask([...tasks ,val]);
        setVal({name:" " , status: false})
    }
    
    return (
        <div className={styles.block}>
        <input  className={styles.bar} onChange={(e) => setVal({name:e.target.value , status:false})} value={val.name} placeholder="123-45-678" type='text'></input>
        <button className={styles.butt} onClick={click} type='submit'>Add</button>
        </div>
         
    )
}

One.propTypes = {
    tasks: PropTypes.array.isRequired,
    setTask: PropTypes.func.isRequired
};