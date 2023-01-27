import { FaTrashAlt } from 'react-icons/fa';

import styles from './TaskList.module.css'

export function TaskList( {task, deleteTask, checkedStatus} ) {

    return(
        <div className={styles.mainContainer}> 
            <div className={styles.taskContainer}>
                <input 
                    type="checkbox" 
                    checked={task.isChecked}
                    onChange={() => checkedStatus(task)}
                />
                <ul>
                    <li><textarea readOnly>{task.task}</textarea></li>
                </ul>
                <button type='submit' onClick={() => deleteTask(task.id)}><FaTrashAlt size={20}/> </button>
            </div>
        </div>
    );
}

