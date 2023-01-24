import { useState } from 'react';

import { TaskList } from './TaskList';

import styles from './CreateTask.module.css'

// import { uuid } from 'uuidv4';



export function CreateTask () {
    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState([]);
    const [tasksCount, setTasksCount] = useState(0)
    const [getChecked, setGetChecked] = useState(false)
    //const [checkedCount, setCheckedCount] = useState(0)

    const checkedStatus = (id) => {
        console.log(id)
        setGetChecked(!checked)
    }


    function handleNewTaskChange() {
        setNewTask(event.target.value)
        
    }

    function handleTasks() {
        event.preventDefault()
        setTasks([...tasks, {
            id: tasksCount,
            task: newTask,
            isChecked: getChecked,

        }])
        setTasksCount(tasks.length+1)
        setNewTask('')
    }

    const deleteTask = (id) => {
        console.log(id);
        var filtered = tasks.filter((task) => task.id !== id)
        console.log(filtered)
        setTasks(filtered)
        setTasksCount(tasks.length-1)
    }

    // console.log(newTask)
    // console.log(tasks)
    //console.log(checkedCount)


    return(
        <div>
            <div className={styles.createTask}>
            <form onSubmit={handleTasks} className={styles.form}>
                <input 
                    name='getNewTask' 
                    type="text" 
                    placeholder="Adicione uma nova tarefa"
                    value={newTask}
                    onChange={handleNewTaskChange}
                />
                <button type='submit'>Criar</button>
            </form>
            </div>
            <div>
            <div className={styles.tasksStatus}>
                <p>Tarefas Criadas {tasksCount}</p>
                <p>Concluidas Valor de {tasksCount}</p>
            </div>
                {tasks.map(task => {  
                    return (
                        <TaskList
                            key={task.id}
                            task={task}
                            tasks={tasks}
                            deleteTask={deleteTask}
                            checked={checkedStatus}
                        />
                    );
                })}
            </div>
        </div>
        
    );
}