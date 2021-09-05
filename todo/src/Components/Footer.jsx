import React from "react";
import { Filter } from "../utils/Enums";
import FooterFilterItem from "./FooterFilterItem";
import { connect } from "react-redux";
import {updateFilter} from "../store/actions";

const FILTER_CONFIG = [
    {id: Filter.all, title: "All"},
    {id: Filter.active, title: "Active"},
    {id: Filter.completed, title: "Completed"},
];

const Footer = (props) => {
    return (
        <footer className="footer" style={{display: "block"}}>
            <span className="todo-count"><strong>{props.todos.filter(item => !item.completed).length}</strong> items left</span>
            <ul className="filters">
                {
                    FILTER_CONFIG.map(
                        filterItem =>
                        <FooterFilterItem 
                            key={filterItem.id}
                            isActive={props.activeFilter === filterItem.id}
                            item={filterItem}
                            onClick={props.updateFilter}/>
                    )
                }
            </ul>
            <button className="clear-completed" style={{display: "none"}}></button>
        </footer>
    );
}

const mapStateToProps = (state) => ({
    activeFilter: state.activeFilter,
    todos: state.todos
})

const mapDispatchToProps = {
    updateFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);