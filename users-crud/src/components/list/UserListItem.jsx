import React from "react";

export default class UserListItem extends React.PureComponent {
    render() {
        return (
            <tr>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.phone}</td>
                <td>{this.props.user.email}</td>
                <td>
                    <button onClick={this.props.onSelect.bind(null, this.props.user)}>Edit</button>
                    <button onClick={this.props.onDelete.bind(null, this.props.user)}>Delete</button>
                </td>
            </tr>
        );
    }
}
