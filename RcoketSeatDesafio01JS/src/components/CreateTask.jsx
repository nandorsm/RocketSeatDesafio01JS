import { useState } from 'react';

import { TaskList } from './TaskList';

import styles from './CreateTask.module.css'

// import { uuid } from 'uuidv4';



export function CreateTask ( {checkedCount} ) {
    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState([]);
    const [tasksCount, setTasksCount] = useState(0)
    //const [checkedCount, setCheckedCount] = useState(0)



    function handleNewTaskChange() {
        setNewTask(event.target.value)
        
    }

    function handleTasks() {
        event.preventDefault()
        setTasks([...tasks, {
            id: tasksCount,
            task: newTask,
            isChecked: false,

        }])
        setTasksCount(tasks.length+1)
        setNewTask('')
    }

    const deleteTask = (id) => {
        console.log(id);
        var filtered = tasks.filter((task) => task.id !== id)
        console.log(filtered)
        setTasks(filtered)

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
                <p>Concluidas {checkedCount} de {tasksCount}</p>
            </div>
                {tasks.map(task => {
                    
                    return (
                        <TaskList
                            key={task.id}
                            task={task}
                            tasks={tasks}
                            deleteTask={deleteTask}
                        />
                        
                    );
                })}
            </div>
        </div>
        
    );
}