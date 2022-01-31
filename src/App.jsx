import { useState } from "react"

export default function App() {
    const [todo, setTodo] = useState([
        'Lavar platos',
        'Lavar ropa',
        'Tarea prueba',
        'Tarea prueba 2'
    ])

    const [task, newTask] = useState('')

    function onInputChange(event) {
        const newValue = event.target.value
        newTask(newValue)
    }

    function addTodo(event) {
        event.preventDefault();
        const newTasks = [...todo, task]
        setTodo(newTasks)
        newTask('')
    }

    return <>
        <h1>TODO</h1>
        <ul>
            {
                todo.map(function (task) {
                    return <li>{task}</li>
                })
            }
        </ul>
        <form onSubmit={addTodo}>
            <input
                type="text"
                value={task}
                onChange={onInputChange}
            />
            <button type="submit">Submit</button>
        </form>
    </>
}