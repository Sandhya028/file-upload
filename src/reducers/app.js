import {
  APP_START_FETCHING,
  APP_STOP_FETCHING,
  APP_CLEAR_ERROR,
  APP_RECEIVE_ERROR,
  APP_RECEIVE_ALERT,
  APP_CLEAR_ALERT,
  USER_AUTHORIZATION_REQUEST,
  USER_AUTHORIZATION_SUCCESS
} from "../actions/app"

const initMsg = {
  type: "",
  message: ""
}

const initialState = {
  token: ""
}

const app = (
  state = {
    fetching: false,
    errorMsg: initMsg,
    alertMsg: initMsg,
    webSocket: null
  },
  action
) => {
  switch (action.type) {
    case APP_START_FETCHING:
      return { ...state, fetching: true }
    case APP_STOP_FETCHING:
      return { ...state, fetching: false }
    case APP_RECEIVE_ERROR:
      return {
        ...state,
        errorMsg: action.payload
      }
    case APP_CLEAR_ERROR:
      return { ...state, errorMsg: initMsg }
    case APP_RECEIVE_ALERT:
      return { ...state, alertMsg: action.payload }
    case APP_CLEAR_ALERT:
      return { ...state, alertMsg: initMsg }
    case USER_AUTHORIZATION_REQUEST:
      return initialState
    case USER_AUTHORIZATION_SUCCESS:
      return {
        ...state,
        token: action.payload.token
      }
    default:
      return state
  }
}

export default app

export const getIsFetching = state => state.fetching
export const getErrorMsg = state => state.errorMsg
export const getAlertMsg = state => state.alertMsg
export const getAccessToken = state => state.token
