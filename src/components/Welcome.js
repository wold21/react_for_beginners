import React, { Component } from 'react'

export default class Welcome extends Component {
  render() {
    const {name, nickName} = this.props
    // const {stat1, state2} = this.state
    return <h1>Welcome {name} a.k.a {nickName}</h1>
  }
}
