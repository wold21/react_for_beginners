import React, { Component } from "react";

class EventBind extends Component {
    constructor(props) {
        super(props);

        this.state = { message: "hello" };

        // this.clickHandler = this.clickHandler.bind(this);
    }
    // clickHandler() {
    //     this.setState({
    //         message: "GoodBye~",
    //     });
    //     console.log(this);
    // }

    clickHandler = () => {
        this.setState({
            message: "GoodBye~~",
        });
    };

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default EventBind;

/* 
바인딩 첫번째 방법
이벤트 핸들러에 .bind(this)를 넘겨주자.
바인딩을 해주지 않았을때 하는 setState는 어떤 this의 state인지 구분을
할 수 없나보다.
그래서 this를 넘겨줌으로써 명시해준다.

바인딩 두번째 방벙
arrow func

바인딩 세번째 방법
생성자에 해당 이벤트 함수를 선언하고 .bind(this)를 해준다. 
직접적으로 함수에 this를 알려준다.
공식문서에서도 권장하는 방식.

바인딩 네번째 방법
최종적인 방식은 애초에 함수 자체를 arrow func으로 만들어
실행시키는 것.
*/
