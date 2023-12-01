import './todolist.css';
import { useState } from 'react';

export const ToDoList = () => {

    const [tasks, setTasks] = useState(['Maison', 'Camion', 'Cabat', 'Marteau']);
    const [newTask, setNewTask] = useState('');
    const [search, setSearch] = useState('');
    const arrSearch = [];

    // const arr1 = ['maison','camion','marteau','cabat'];
    // const arr2 = arr1.filter((el) => el.match(/^Ma/i));
    // console.log(arr1);
    // console.log(arr2);

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