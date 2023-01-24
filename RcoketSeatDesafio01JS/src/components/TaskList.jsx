
import { useState } from 'react'
import styles from './TaskList.module.css'

export function TaskList( {task, tasks, deleteTask} ) {


    const [checked, setChecked] = useState(false);
    const [checkedCount, setCheckedCount] = useState(0)
    
    
    
    function chekedStatus() {
        setChecked(!checked)
        tasks.map((t) => {
            if(t.isChecked == true){
                setCheckedCount(checkedCount+1)
            }
            return checkedCount
        })
    }
    


    //console.log(tasks.id)
    // tasks.map((t) => {
    //     console.log(t.id)
    // })
    // console.log(checked)
    //console.log(checkedCount)
    return(

        

        <div className={styles.mainContainer}>
            
            <div className={styles.taskContainer}>
             
                <input 
                    type="checkbox" 
                    checked={checked[0] && checked[1]}
                    onChange={chekedStatus}
                />
                <ul>
                    <li>{task.task}</li>
                </ul>
                <button type='submit' onClick={() => deleteTask(task.id)}>Delete</button>
                
            </div>

        </div>
        
    );
}