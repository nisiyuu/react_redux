import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readEvents } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, event => {
      return (
        <tr key={event.id}>
          <td>{event.id}</td>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
          <td>{event.body}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        
        <tbody>
          {this.renderEvents()}
        </tbody>
      
      </table>
      <Link to="/events/new">New Event</Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  }
}

const mapDispachProps = dispatch => {
  return {
    readEvents: () => dispatch(readEvents())
  }
}

export default connect(mapStateToProps, mapDispachProps)(EventsIndex);
