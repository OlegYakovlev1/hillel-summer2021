import React from "react";
import { Filter } from "../utils/Enums";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    filterTodos = () => {
        switch(this.props.activeFilter) {
            case Filter.active:
                return this.props.todos.filter(item => !item.completed);
            case Filter.completed:
                return this.props.todos.filter(item => item.completed);
            default:
                return this.props.todos;
        }
    }

    render() {
        return(
            <section className="main" style={{display: "block"}}>
				<input id="toggle-all" className="toggle-all" type="checkbox"/>
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
                    {
                        this.filterTodos().map(
                            item =>
                            <TodoItem
                                key={item.id}
                                item={item}
                                deleteTodo={this.props.deleteTodo}
                                toggleTodo={this.props.toggleTodo}
                                updateTitle={this.props.updateTitle} />
                        )
                    }
                </ul>
			</section>
        );
    }
}

export default TodoList;