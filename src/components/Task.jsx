function Task({ task, deleteTask, markTask}) {
    return (
        <div>
            <span
                onClick={() => markTask(task.id)}
                style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    cursor: 'pointer'
                }}
            >
                {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>X</button>
        </div>
    );
}

export default Task;