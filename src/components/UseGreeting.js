import React, { Component } from "react";

class UseGreeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true,
        };
    }

    render() {
        // true일때민 렌더링 되게
        return this.state.isLoggedIn && <div>Welcome Tazo</div>;

        // 4단계 삼항연산자를 이용한 return
        // return this.state.isLoggedIn ? <div>Welcome Tazo</div> : <div>Welcome Guest</div>;

        // 3단계 변수를 사용한 return
        // let message;
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Tazo</div>;
        // } else {
        //     message = <div>Welcome Kim</div>;
        // }
        // return <div>{message}</div>;

        // 2딘계 if-else -> html return
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Tazo</div>;
        // } else {
        //     return <div>Welcome Kim</div>;
        // }

        //  1단계
        // return (
        //     <div>
        //         <div>Welcome Tazo</div>
        //         <div>Welcome Kim</div>
        //     </div>
        // );
    }
}

export default UseGreeting;
