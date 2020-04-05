import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { postEvents } from '../actions';
// import { Link } from 'react-router-dom';//キャンセルボタン

class EventsNew extends Component {
  render() {
    return (
      <div>
        hi
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     events: state.events
//   }
// }

// const mapDispachProps = dispatch => {
//   return {
//     postEvents: () => dispatch(postEvents())
//   }
// }

export default connect(null,null)(EventsNew);
