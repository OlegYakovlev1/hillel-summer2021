import { useState } from "react"
import {connect} from "react-redux";
import { createTodo } from "../store/actions";

const Header  = (props) => {
    const [value, setValue] = useState("");

    const onKeyPress = (e) => {
        if(e.key === "Enter" && value.trim()) {
            props.createTodo(value);
            setValue("");
        }
    }

    return(
        <header className="header">
            <h1>todos</h1>
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={onKeyPress} />
        </header>
    );
}

const mapDispatchToProps = {
    createTodo
}

export default connect(null, mapDispatchToProps)(Header);