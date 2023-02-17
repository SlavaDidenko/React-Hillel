import React from "react";
import uniqid from 'uniqid';

import Button from "../UI/Button/Button";
import Task from "./components/Task";

import './todo.sass'


export class Todo extends React.Component {
    constructor() {
        super();
    }

    state = {
        todoList: [
            {
                title: "Smth very important",
                id: 1,
                done: false,
            },
            {
                title: "Another very important thing",
                id: 2,
                done: false,
            },
            {
                title: "Ordinary thing",
                id: 3,
                done: true,
            }
        ],
        toDoValue : ""
    }

    changeState = (id) => {
        const copyArr = [...this.state.todoList]
        const current = copyArr.find(el => el.id === id)
        current.done = !current.done
        this.setState({todoList: copyArr})
    }

    addNewTask = (e) => {
        e.preventDefault();

        this.setState({
            todoList: [
                ...this.state.todoList,
                {
                    title: this.state.toDoValue,
                    done: false,
                    id: uniqid(),
                }
            ],

            toDoValue: "",
        })
    }

    render() {
        const {toDoValue,todoList} = this.state
        return(
            <>
                <div className={"container"}>
                    <form onSubmit={e => this.addNewTask(e)} >
                        <input value={toDoValue}
                               onChange={e =>  this.setState({toDoValue : e.target.value})}
                               type={"text"}/>
                        <Button type="submit" text="Додати"/>
                    </form>
                    <ul>
                        {
                            todoList.map(todo => (
                                <Task
                                    key={todo.id}
                                    data={todo}
                                    onClick={this.changeState}/>
                            ))
                        }
                    </ul>
                </div>
            </>
        )
    }
}

export default Todo;