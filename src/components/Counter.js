import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment(){
        // 한번의 접근만 있을 때
        // this.setState({
        //     count : this.state.count + 1
        // }, () => {
        //     console.log('callback value', this.state.count);
        // })
        
        // 이전 값을 활용해야할 때
        this.setState((prevState, props) => ({
            count : prevState.count + 1
        }))
        console.log(this.state.count);
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    decrement(){
        this.setState({
            count : this.state.count - 1
        }, () => {
            console.log('callback value', this.state.count);
        })
        // console.log(this.state.count);
    }
    
  render() {
    return (
        <div>
            <div>Count - {this.state.count}</div>
            <button onClick={() => this.increment()}>Increment</button>
            <button onClick={() => this.incrementFive()}>incrementFive</button>
            <button onClick={() => this.decrement()}>Decrement</button>
        </div>
    )
  }
}

export default Counter

