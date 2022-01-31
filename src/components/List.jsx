export default function List({ name, tasks, checkF, deleteF }) {
    return <>
        <h1>{name}</h1>
        <ul>
            {tasks.map((task) => <li>
                {task.name}
                {
                    checkF &&
                    <button onClick={() => checkF(task.id)}>check</button>
                }
                {
                    deleteF &&
                    <button onClick={() => deleteF(task.id)}>delete</button>
                }
            </li>)}
        </ul>
    </>
}