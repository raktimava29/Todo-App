import One from './one';
import Two from './two';
import Foot from './footer';
import {useState} from 'react';

export default function Input(){
    const[tasks,setTask] = useState([])

    const completed = tasks.filter((task) => task.status).length
    const total = tasks.length;

    return(
        <div>
        <One tasks={tasks} setTask={setTask} />
        <Two tasks={tasks} setTask={setTask}/>
        <Foot completed={completed} total={total} />
        </div> 
    )
}