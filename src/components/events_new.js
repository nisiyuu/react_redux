import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postEvent } from '../actions';
import { Link } from 'react-router-dom';//キャンセルボタン
import {Field, reduxForm} from 'redux-form'

class EventsNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span> }
      </div>
    )
  }

  async onSubmit(values) {
    console.log(values)
    await this.props.postEvent(values);
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props

    return (
      //handleSubmitはredux-formの機能
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField}></Field></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField}></Field></div>
        <div>
          <input type="submit" value="Submit" disabled={pristine || submitting}></input>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter"
  if (!values.body) errors.body = "Enter"  
  return errors;
}

const mapDispatchToProps = {postEvent}

export default connect(null, mapDispatchToProps)(
  reduxForm({validate, form:'eventNewForm'})(EventsNew)
);
