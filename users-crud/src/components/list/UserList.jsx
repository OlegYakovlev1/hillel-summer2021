import React, { Component } from "react";
import "./UserList.css";

import UserListItem from "./UserListItem";

export default class UserList extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map((user) => (
                        <UserListItem
                            user={user}
                            key={user.id}
                            onSelect={this.props.onSelect}
                            onDelete={this.props.onDelete}
                        />
                    ))}
                </tbody>
            </table>
        );
    }
}
