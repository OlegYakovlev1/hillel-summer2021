import {useState} from "react";

const TodoItem = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState("");

    const editHandler = () => {
        setIsEditing(true);
        setValue(props.item.title);
    }

    const onChange = (e) => setValue(e.target.value);

    const saveChanges = () => {
        setIsEditing(false);
        props.updateTitle(props.item.id, value);
    }

    if(isEditing) {
        return(
            <li className="editing">
                <div className="view">
                    <input className="toggle" type="checkbox"/>
                    <label>test</label>
                    <button className="destroy"></button>
                </div>
                <input
                    autoFocus
                    className="edit"
                    value={value}
                    onBlur={saveChanges}
                    onChange={onChange}/>
            </li>
        );
    }
    
    return(
        <li className="">
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={props.item.completed}
                    onChange={() => {props.toggleTodo(props.item.id);}} />
                <label onDoubleClick={editHandler}>{props.item.title}</label>
                <button className="destroy" onClick={() => props.deleteTodo(props.item.id)}></button>
            </div>
        </li>
    );
}

export default TodoItem;