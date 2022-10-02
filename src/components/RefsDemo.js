import React, { Component } from "react";

export class RefsDemo extends Component {
    constructor(props) {
        super(props);
        // 1.
        this.inputRef = React.createRef();
        // 2. callback 접근 방식
        this.cbRef = null;
        this.setCbRef = (element) => {
            this.cbRef = element;
        };
    }

    componentDidMount() {
        // 1.
        // this.inputRef.current.focus();
        // console.log(this.inputRef);

        // 2.
        if (this.cbRef) {
            this.cbRef.focus();
        }
    }
    clickHandler = () => {
        alert(this.inputRef.current.value);
    };

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default RefsDemo;

// 첫번째 방법은 React.createRef()를 사용하여 focus를 잡아주는 방법
// 두번째 방법은 콜백 참조 방식
