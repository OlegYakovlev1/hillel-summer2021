import React from "react";

export default class FooterFilterItem extends React.Component {
    render() {
        return(
            <li >
                <a
                    href="#!"
                    className={this.props.isActive ? "selected" : ""}
                    onClick={(e) => {e.preventDefault(); this.props.onClick(this.props.item.id)}}>
                    {this.props.item.title}
                </a>
            </li>
        );
    }
}