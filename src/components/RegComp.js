import React, { Component } from "react";

class RegComp extends Component {
    render() {
        console.log("RegComp Render");
        return <div>RegComp {this.props.name}</div>;
    }
}

export default RegComp;
