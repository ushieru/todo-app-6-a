import { useState } from "react"
import List from './components/List'

let counter = 4;

export default function App() {
    const [todo, setTodo] = useState([
        {
            id: 1,
            name: 'Lavar platos'
        },
        {
            id: 2,
            name: 'Lavar ropa'
        },
        {
            id: 3,
            name: 'Tarea prueba'
        }
    ])

    const [inProgress, setInProgess] = useState([])
    const [done, setDone] = useState([])

    const [newTask, setNewTask] = useState('')

    const onInputChange = (event) => {
        const newValue = event.target.value
        setNewTask(newValue)
    }

    const addTodo = (event) => {
        event.preventDefault();
        const newTasks = [...todo, { id: counter, name: newTask }]
        setTodo(newTasks)
        setNewTask('')
        counter++
    }

    const deleteTodo = (id) => {
        const newTasks = todo.filter((task) => task.id != id)
        setTodo(newTasks)
    }

    const checkTodo = (id) => {
        const task = todo.filter((task) => task.id == id)
        deleteTodo(id)
        setInProgess([...inProgress, task[0]])
    }

    return <>
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <div className="flex w-full justify-evenly mb-10">
                <List
                    name='TODO'
                    tasks={todo}
                    checkF={checkTodo}
                    deleteF={deleteTodo}
                />
                <List
                    name='In progress'
                    tasks={inProgress}
                    checkF={null}
                    deleteF={null}
                />
                <List
                    name='Done'
                    tasks={done}
                    deleteF={null}
                />
            </div>
            <div>
                <form onSubmit={addTodo}>
                    <input
                        type="text"
                        value={newTask}
                        onChange={onInputChange}
                        className="border border-black rounded"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-2 rounded ml-4"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </>
}