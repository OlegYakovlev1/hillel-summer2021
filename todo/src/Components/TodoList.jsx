import React from "react";
import {connect} from "react-redux";
import { Filter } from "../utils/Enums";
import TodoItem from "./TodoItem";
import {deleteTodo, toggleTodo, updateTitle, toggleAll} from "../store/actions";

const filterTodos = (todos, activeFilter) => {
    switch(activeFilter) {
        case Filter.active:
            return todos.filter(item => !item.completed);
        case Filter.completed:
            return todos.filter(item => item.completed);
        default:
            return todos;
    }
}

const TodoList = (props) => {
    const allCompleted = props.todos.length && !props.todos.find(todo => !todo.completed);

    return(
        <section className="main" style={{display: "block"}}>
            <input
                id="toggle-all"
                className="toggle-all"
                type="checkbox"
                checked={allCompleted}
                onChange={(e) => {props.toggleAll(!allCompleted)}}/>
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {
                    filterTodos(props.todos, props.activeFilter).map(
                        item =>
                        <TodoItem
                            key={item.id}
                            item={item}
                            deleteTodo={props.deleteTodo}
                            toggleTodo={props.toggleTodo}
                            updateTitle={props.updateTitle} />
                    )
                }
            </ul>
        </section>
    );
}

const mapStateToProps = (state) => ({
    activeFilter: state.activeFilter,
    todos: state.todos
})

const mapDispatchToProps = {
    deleteTodo,
    toggleTodo,
    updateTitle,
    toggleAll
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);