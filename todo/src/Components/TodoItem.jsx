import React from "react";

class TodoItem extends React.Component {
    render() {
        // <li className="editing">
        //     <div className="view">
        //         <input className="toggle" type="checkbox"/>
        //         <label>test</label>
        //         <button className="destroy"></button>
        //     </div>
        //     <input className="edit"/>
        // </li>
        return(
            <li className="">
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={this.props.item.completed}
                        onClick={() => this.props.toggleTodo(this.props.item.id)} />
                    <label>{this.props.item.title}</label>
                    <button className="destroy"></button>
                </div>
            </li>
        );
    }
}

export default TodoItem;