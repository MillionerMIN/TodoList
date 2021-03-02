import React from 'react';
import TodoList from "./components/TodoList";

//css
import './App.css';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    const taskOne: Array<TaskType> = [
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'Css', isDone: true},
        {id: 3, title: 'React', isDone: true}
    ]
    const taskTwo: Array<TaskType> = [
        {id: 4, title: 'MILK', isDone: true},
        {id: 5, title: 'BREAD', isDone: true},
        {id: 6, title: 'MEAT', isDone: true}
    ]
    return (
        //JSX
        <div className="container">
            <div className="App">
                <TodoList title={'What to learn'} task={taskOne}/>
                <TodoList title={'What to by'} task={taskTwo}/>
            </div>
        </div>
    );
}


export default App;


