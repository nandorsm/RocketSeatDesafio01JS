import { useState } from 'react';

import { TaskList } from './TaskList';

import styles from './CreateTask.module.css'

// import { uuid } from 'uuidv4';



export function CreateTask () {
    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState([]);
    const [totalTaskCount, setTotalTaskCount] = useState(0)
    //const [trueTotalCount, setTrueTotalCount] = useState([])
    const [getChecked, setGetChecked] = useState(false)
    //const [checkedCount, setCheckedCount] = useState(0)
    


    const checkedStatus = (id) => {
        setGetChecked(tasks[id].isChecked = !getChecked)
        //console.log(getChecked)
        var copyFalseFilter = [...tasks]
        var trueFilter = tasks.filter((task) => task.isChecked !== true)
        var falseFilter = tasks.filter((task) => task.isChecked == false)
        // taskOrdenada = trueFilter + falseFilter
        // console.log(tasks)
        setTasks(trueFilter)
        //setTasks()

    }
    


    function handleNewTaskChange() {
        setNewTask(event.target.value)
        
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
                <p>Tarefas Criadas {totalTaskCount}</p>
                <p>Concluidas Valor de {totalTaskCount}</p>
            </div>
                {tasks.map(task => {  
                    return (
                        <TaskList
                            key={task.id}
                            task={task}
                            tasks={tasks}
                            deleteTask={deleteTask}
                            checkedStatus={checkedStatus}
                        />
                    );
                })}
            </div>
        </div>
        
    );
}