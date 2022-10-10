import React, { Component, PureComponent } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "tazo",
        };
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Tazo",
            });
        }, 2000);
    }

    render() {
        console.log("<<<<<<< ParentComp Render >>>>>>>");
        return (
            <div>
                ParentComp
                {/* <RegComp name={this.state.name} /> */}
                {/* <PureComp name={this.state.name} /> */}
                <MemoComp name={this.state.name} />
            </div>
        );
    }
}

export default ParentComp;
