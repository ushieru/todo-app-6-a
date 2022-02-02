export default function List({ name, tasks, checkF, deleteF }) {
    return <div>
        <h1 className="text-2xl">{name}</h1>
        <ul>
            {tasks.map((task) => <li className="mb-1">
                {task.name}
                {
                    checkF &&
                    <button
                        className="material-icons text-xs bg-green-600 text-white rounded px-2 ml-2"
                        onClick={() => checkF(task.id)}
                    >
                        check_circle
                    </button>
                }
                {
                    deleteF &&
                    <button
                        className="material-icons text-xs bg-red-600 text-white rounded px-2 ml-2"
                        onClick={() => deleteF(task.id)}
                    >
                        delete
                    </button>
                }
            </li>)}
        </ul>
    </div>
}