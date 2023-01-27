import { useState } from 'react';

import { TaskList } from './TaskList';

import styles from './CreateTask.module.css'

import { FaPlus } from 'react-icons/fa';
import { NoTaskScreen } from './NoTaskScreen';

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
        event.target.setCustomValidity('')
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
        var filtered = tasks.filter((task) => task.id !== id.id)
        console.log(filtered)
        setTasks(filtered)
        setTotalTaskCount(tasks.length-1)
        if(id.isChecked == true){
            setTrueTotalCount(trueTotalCount - 1)
        }
        
    }

    function handleNewCommentInvalid () {
        event.target.setCustomValidity('Este Campo é Obrigatório')
    }

    

    // console.log(newTask)
    console.log(tasks)
    // console.log(checkedCount)
    console.log(trueTotalCount)

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
                        onInvalid={handleNewCommentInvalid}
                        required
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
                    {totalTaskCount == 0 ? <NoTaskScreen/>:
                        tasks.map(task => {  
                            return (
                                <TaskList
                                    key={task.id}
                                    task={task}
                                    deleteTask={deleteTask}
                                    checkedStatus={checkedStatus}
                                />
                            );
                        })
                    }
                </div> 
            </div>
        </div>
        
    );
    
}