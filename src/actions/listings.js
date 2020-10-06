import { createAction } from "redux-actions"

export const FETCH_INFORMATION_REQUEST = "FETCH_INFORMATION_REQUEST"
export const fetchInformationRequest = createAction(FETCH_INFORMATION_REQUEST)

export const FETCH_INFORMATION_SUCCESS = "FETCH_INFORMATION_SUCCESS"
export const fetchInformationSuccess = createAction(FETCH_INFORMATION_SUCCESS)

export const SEND_FILE_REQUEST = "SEND_FILE_REQUEST"
export const sendFileRequest = createAction(SEND_FILE_REQUEST)
