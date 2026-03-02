import { useState } from 'react';

function AddTaskForm({addTask}) {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Nueva tarea'
            />
            <button type='submit'>Añadir tarea</button>
        </form>
    )
}

export default AddTaskForm;