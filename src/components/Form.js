import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            comments: "",
            topic: "react",
        };
    }

    handleUserNameChange = (e) => {
        this.setState({
            username: e.target.value,
        });
    };
    handleCommentsChange = (e) => {
        this.setState({
            comments: e.target.value,
        });
    };
    handleTopicChange = (e) => {
        this.setState({
            topic: e.target.value,
        });
    };
    handlerSubmit = (e) => {
        alert(`${this.state.username}, ${this.state.comments}, ${this.state.topic}`);
        e.preventDefault();
    };
    render() {
        const { username, comments, topic } = this.state;
        return (
            <form onSubmit={this.handlerSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={this.handleUserNameChange}
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea
                        value={comments}
                        onChange={this.handleCommentsChange}
                    ></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="react">react</option>
                        <option value="angular">angular</option>
                        <option value="vue">vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Form;
