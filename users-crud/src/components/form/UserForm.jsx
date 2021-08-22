import React, { Component } from 'react';

import './UserForm.css';

export default class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...props.user,
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (state.id !== props.user.id) {
            return {
                ...props.user,
                id: props.user.id
            };
        }

        return null;
    }

    onClear = () => {
        this.props.onClear(this.props.user);
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSave(this.state);
    };

    onChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form
                action=""
                className="user-form"
                onSubmit={this.onSubmit}>
                <h2>User Details</h2>
                <label htmlFor="nameInput">Name</label>
                <input
                    type="text"
                    name="name"
                    id="nameInput"
                    value={this.state.name}
                    onChange={this.onChange}
                />
                <br />

                <label htmlFor="emailInput">Email</label>
                <input
                    type="text"
                    name="email"
                    id="emailInput"
                    value={this.state.email}
                    onChange={this.onChange}
                />
                <br />

                <label htmlFor="phoneInput">Phone</label>
                <input
                    type="text"
                    name="phone"
                    id="phoneInput"
                    value={this.state.phone}
                    onChange={this.onChange}
                />
                <br />

                <div className="buttons">
                    <button type="submit">
                        {this.state.id ? "Update" : "Save"}
                    </button>
                    <button
                        type="button"
                        onClick={this.onClear}
                    >
                        Clear
                    </button>
                </div>
            </form>
        );
    }
}
