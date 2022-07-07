import React, { useState } from 'react';
import AddNote from './AddNote';
import TaskItem from './TaskItem';

function Tasks() {
    const [isAdd, setIsAdd] = useState(false);
    const [dataList, setDataList] = useState([]);

    const handleAddButtonClick = () => {
        setIsAdd(true);
    };

    return (
        <article className='tasks-wrapper'>
            <div className='tasks-header'>
                <span>Tasks</span>
                <div>
                    <button className='tasks-menu__btn'>$</button>
                </div>
            </div>
            <ul className='tasks-list'>
                {
                    dataList.length === 0 
                        ? null 
                        : dataList.map(v => <li><TaskItem title={v.title} cycle={v.cycle} /></li>)
                }
                <li>
                    {
                        isAdd ? <AddNote setAdd={setIsAdd} setData={setDataList} /> : <button onClick={handleAddButtonClick} className='tasks-add__btn'>Add Task</button>
                    }
                </li>
            </ul>
        </article>
    );
}

export default Tasks