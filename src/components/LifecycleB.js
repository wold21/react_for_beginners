import React, { Component } from "react";
import LifecycleC from "./LifecycleC";

class LifecycleB extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "tazo",
        };
        console.log("LifecycleB Constructor");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleB getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("LifecycleB componentDidMount");
    }

    render() {
        console.log("LifecycleB render");
        return (
            <div>
                <div>LifecycleB</div>
                <LifecycleC />
            </div>
        );
    }
}

export default LifecycleB;
