import './todolist.css';
import { useState } from 'react';

export const ToDoList = () => {

    const [tasks, setTasks] = useState([
        {name:'Maison à ranger',done:true},
        {name:'Camion à garer',done:false},
        {name:'Cabat à remplir',done:true},
        {name:'Marteau à utiliser',done:false}
    ]);
    const [newTask, setNewTask] = useState('');
    const [search, setSearch] = useState('');
    const arrSearch = [];

    return (
        <div className="todolist">
            <h1>✨ 🌟 ⭐️ TO DO LIST ⭐️ 🌟 ✨</h1>
            <div className="search">
                <input type="text" value={search} onChange={(e) => {
                    const arr1 = JSON.parse(JSON.stringify(tasks));
                    console.log(arr1);
                    setTasks(arr1);
                    arrSearch.push(e.target.value);
                    let str = arrSearch.join();
                    setSearch(str);
                    let regex = new RegExp(`${str}`,'gi');
                    const arr2 = arr1.filter((el) => el.match(regex));
                    if (arrSearch.length > 0) {
                        setTasks(arr2);
                    }
                }} />
                <i className="fa fa-search" aria-hidden="true"></i>
            </div>

            <div className="container">
                <ul className="lists">
                    {tasks.map((item) => {
                        return (
                            <li className={item.done ? "task" : "task done"}>
                                <div className="close">
                                    <i className="fa fa-trash" aria-hidden="true" onClick={(i) => {
                                        const array = JSON.parse(JSON.stringify(tasks));
                                        array.splice(1, 1);
                                        setTasks(array);
                                    }}></i>
                                </div>
                                <p>{item.name}</p>
                            </li>
                        )
                    })}

                </ul>
                <div className="more">
                    <input type="text" value={newTask} onChange={(e) => {
                        let val = e.target.value;
                        setNewTask(val);
                    }} />
                    <input type="button" value="ADD TO LIST" onClick={() => {
                        if (newTask) {
                            const array = JSON.parse(JSON.stringify(tasks));
                            array.push(newTask);
                            array.sort();
                            setTasks(array);
                            setNewTask('');
                        }
                    }} />
                </div>
            </div>

        </div >
    )
}