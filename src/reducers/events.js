import { READ_EVENTS } from '../actions'
import _ from 'lodash'//responseをみやすくする, idをキーに

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}