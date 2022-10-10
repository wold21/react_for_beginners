import React, { Component } from "react";
import WithCounter from "./withCounter";

class HoverCounter extends Component {
    render() {
        const { count, incrementCount } = this.props;
        return (
            <div>
                <h2 onMouseOver={incrementCount}>Hovered {count} time</h2>
            </div>
        );
    }
}

export default WithCounter(HoverCounter, 10);
