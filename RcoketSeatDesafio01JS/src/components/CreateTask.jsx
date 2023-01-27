import { useState } from 'react';

import { TaskList } from './TaskList';

import styles from './CreateTask.module.css'

import { FaPlus } from 'react-icons/fa';

// import { uuid } from 'uuidv4';



export function CreateTask () {
    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState([]);
    const [totalTaskCount, setTotalTaskCount] = useState(0)
    const [trueTotalCount, setTrueTotalCount] = useState([])
    const [getChecked, setGetChecked] = useState(false)
    

    // Sorting function
    function Sorting(a, b) {
        if(a.isChecked < b.isChecked){
            return -1;
        }
        if(a.isChecked > b.isChecked){
            return 1;
        }
    }

    // Sorted List
    var SortedTasks = tasks.sort(Sorting)

    const checkedStatus = (id) => {
        // Changing check state
        setGetChecked(id.isChecked = !getChecked)
        
        // Counting Trues in list
        var trueFilter = tasks.filter((task) => task.isChecked == true)
        setTrueTotalCount(trueFilter.length)

        // Setting Sorted List
        setTasks(SortedTasks);
        console.log(tasks)
    }
    
    function handleNewTaskChange() {
        setNewTask(event.target.value)
        setGetChecked(false)
    }

    function handleTasks() {
        event.preventDefault()
        setTasks([...tasks, {
            id: totalTaskCount,
            task: newTask,
            isChecked: getChecked,

        }])
        setTotalTaskCount(tasks.length+1)
        setNewTask('')

    }

    const deleteTask = (id) => {
        console.log(id);
        var filtered = tasks.filter((task) => task.id !== id)
        console.log(filtered)
        setTasks(filtered)
        setTotalTaskCount(tasks.length-1)
        setTrueTotalCount(trueTotalCount -1)
    }

    // console.log(newTask)
    // console.log(tasks)
    // console.log(checkedCount)

    return(
        <div className={styles.mainDiv}>
            <div className={styles.createTask}>
                <form onSubmit={handleTasks} className={styles.form}>
                    <input 
                        name='getNewTask' 
                        type="text" 
                        placeholder="Adicione uma nova tarefa"
                        value={newTask}
                        onChange={handleNewTaskChange}
                    />
                    <button className={styles.btn} type='submit'>
                        <span>Criar</span><FaPlus size={8}/>
                    </button>
                </form>
            </div>
            <div className={styles.tasksContainer}>
                <div className={styles.tasksStatus}>
                    <p>Tarefas criadas <span className={styles.contador}>{totalTaskCount}</span></p>
                    <p className={styles.concluidas}>Concluidas <span className={styles.contador}>{trueTotalCount == 0 ? 0 : trueTotalCount} de {totalTaskCount}</span></p>
                    
                </div>
                <div>
                    {tasks.map(task => {  
                        return (
                            <TaskList
                                key={task.id}
                                task={task}
                                deleteTask={deleteTask}
                                checkedStatus={checkedStatus}
                            />
                        );
                    })}
                    
                </div> 
            </div>
        </div>
        
    );
}