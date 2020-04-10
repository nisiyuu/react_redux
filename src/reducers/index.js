import { combineReducers } from 'redux'//各reducerを結合する
import { reducer as form } from 'redux-form'//別名に変更
import events from './events'

export default combineReducers({ events,form })
