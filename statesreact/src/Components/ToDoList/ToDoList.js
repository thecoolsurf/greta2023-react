import './todolist.css';
import { useState } from 'react';

export const ToDoList = () => {

    const [tasks, setTasks] = useState(['Tache 1', 'Tache 2']);
    const [newTask, setNewTask] = useState('');
    const [search, setSearch] = useState('');

    return (
        <div className="todolist">
            <h1>✨ 🌟 ⭐️ TO DO LIST ⭐️ 🌟 ✨</h1>
            <div className="search">
                <input type="text" value={search} placeholder="Recherche..." onChange={(e) => {
                    let str = e.target.value;
                    console.log(str);
                    const array = JSON.parse(JSON.stringify(tasks));
                    const regex = /[str]/g;
                    array.find((word) => word.match(regex));
                    setTasks(array);
                }} />
                <i className="fa fa-search" aria-hidden="true"></i>
            </div>

            <div className="container">
                <ul className="lists">
                    {tasks.map((item) => {
                        return (
                            <li>
                                <div className="close">
                                    <i className="fa fa-times" aria-hidden="true" onClick={(i) => {
                                        const array = JSON.parse(JSON.stringify(tasks));
                                        array.splice(1, 1);
                                        setTasks(array);
                                    }}></i>
                                </div>
                                <p className="task">{item}</p>
                            </li>
                        )
                    })}

                </ul>
                <div className="more">
                    <input type="text" value={newTask} placeholder="Nouvelle tache..." onChange={(e) => {
                        let val = e.target.value;
                        setNewTask(val);
                    }} />
                    <input type="button" value="ADD TO LIST" onClick={() => {
                        if (newTask) {
                            const array = JSON.parse(JSON.stringify(tasks));
                            array.push(newTask);
                            array.sort();
                            setTasks(array);
                        }
                    }} />
                </div>
            </div>

        </div >
    )
}