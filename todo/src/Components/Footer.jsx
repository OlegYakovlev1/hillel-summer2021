import React from "react";
import { Filter } from "../utils/Enums";
import FooterFilterItem from "./FooterFilterItem";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.filterConfig = [
            {id: Filter.all, title: "All"},
            {id: Filter.active, title: "Active"},
            {id: Filter.completed, title: "Completed"},
        ];
    }

    render() {
        return (
            <footer className="footer" style={{display: "block"}}>
				<span className="todo-count"><strong>{this.props.todos.filter(item => !item.completed).length}</strong> items left</span>
				<ul className="filters">
                    {
                        this.filterConfig.map(
                            filterItem =>
                            <FooterFilterItem 
                                key={filterItem.id}
                                isActive={this.props.activeFilter === filterItem.id}
                                item={filterItem}
                                onClick={this.props.updateFilter}/>
                        )
                    }
				</ul>
				<button className="clear-completed" style={{display: "none"}}></button>
			</footer>
        );
    }
}