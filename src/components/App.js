import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class App extends Component {
  render() {
    // propsとはコンポーネントに備わっている標準機能で、外部よりリードオンリー(読み取り専用)なパラメータを受け取る仕組みです。
    const props = this.props;
    
    return (
      <div>
        <div>Value:{props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    value: state.count.value
  }
}

const mapDispachProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  }
}



export default connect(mapStateToProps, mapDispachProps)(App);
