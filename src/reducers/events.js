import { READ_EVENTS,DELETE_EVENT,READ_EVENT,UPDATE_EVENT} from '../actions'
import _ from 'lodash'//responseをみやすくする, idをキーに

export default (events = {}, action) => {
  switch (action.type) {
    case UPDATE_EVENT:
    case READ_EVENT:
      return { ...events, [action.response.data.id]: action.response.data }
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      delete events[action.id]
      //スプレッド構文で更新後のオブジェクトを作成
      return {...events}
    default:
      return events
  }
}