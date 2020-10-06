import { createAction } from "redux-actions"

export const APP_START_FETCHING = "APP_START_FETCHING"
export const APP_STOP_FETCHING = "APP_STOP_FETCHING"

export const APP_RECEIVE_ERROR = "APP_RECEIVE_ERROR"
export const APP_CLEAR_ERROR = "APP_CLEAR_ERROR"

export const APP_RECEIVE_ALERT = "APP_RECEIVE_ALERT"
export const APP_CLEAR_ALERT = "APP_CLEAR_ALERT"

export const appStartFetching = createAction(APP_START_FETCHING)
export const appStopFetching = createAction(APP_STOP_FETCHING)

export const appReceiveError = createAction(APP_RECEIVE_ERROR)
export const appClearError = createAction(APP_CLEAR_ERROR)

export const appReceiveAlert = createAction(APP_RECEIVE_ALERT)
export const appClearAlert = createAction(APP_CLEAR_ALERT)

export const USER_AUTHORIZATION_REQUEST = "USER_AUTHORIZATION_REQUEST"
export const USER_AUTHORIZATION_SUCCESS = "USER_AUTHORIZATION_SUCCESS"
export const USER_AUTHORIZATION_FAILURE = "USER_AUTHORIZATION_FAILURE"

export const userAuthorizationRequest = createAction(USER_AUTHORIZATION_REQUEST)
export const userAuthorizationSuccess = createAction(USER_AUTHORIZATION_SUCCESS)
export const userAuthorizationFailure = createAction(USER_AUTHORIZATION_FAILURE)
