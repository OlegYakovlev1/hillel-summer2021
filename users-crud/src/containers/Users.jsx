import React, { Component } from "react";

import UserList from "../components/list/UserList";
import UserForm from "../components/form/UserForm";
import apiService from "../utils/userService";

export default class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedUser: this.getEmptyUser(),
            users: [],
        };
    }  

    getEmptyUser() {
        return {
            name: "",
            email: "",
            phone: "",
        };
    }  

    onClear = () => {
        this.setState({
            selectedUser: this.getEmptyUser(),
        });
    };

    onSelect = (selectedUser) => {
        this.setState({ selectedUser });
    };

    onDelete = (user) => {
        apiService.deleteUser(user)
        .then(() => {
            this.setState({
                users: this.state.users.filter((u) => u.id !== user.id),
                selectedUser: this.getEmptyUser(),
            });
        })
    };

    onSave = (user) => {
        if (user.id) {
            this.updateUser(user);
        } else {
            this.createUser(user);
        }
    };

    createUser(user) {
        apiService.createUser(user)
            .then(() => {
            this.setState({
                users: [...this.state.users, user],
                selectedUser: this.getEmptyUser(),
            });
        });
    }

    updateUser(user) {
        apiService.updateUser(user)
        .then(() => {
            this.setState({
                users: this.state.users.map((u) =>
                    u.id === user.id ? user : u
                ),
                selectedUser: this.getEmptyUser(),
            });
        });
    }

    onFormInputChange = (e) => {
        this.setState({
            selectedUser: {
                ...this.state.selectedUser,
                [e.target.name]: e.target.value,
            },
        });
    };

    componentDidMount() {
        apiService.getUsers()
        .then((data) => {
            this.setState({ users: data });
        });
    }

    render() {
        return (
            <div className="wrapper">
                <div className="left-panel">
                    <UserList
                        users={this.state.users}
                        onSelect={this.onSelect}
                        onDelete={this.onDelete}
                    />
                </div>
                <div className="right-panel">
                    <UserForm
                        user={this.state.selectedUser}
                        onClear={this.onClear}
                        onSave={this.onSave}
                    />
                </div>
            </div>
        );
    }
}
