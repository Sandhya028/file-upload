import { combineReducers } from "redux"
import app, * as fromApp from "./app"
import listings, * as fromListings from "./listings"

const rootReducer = combineReducers({
  app,
  listings
})

export default rootReducer

//app
export const getAccessToken = state => fromApp.getAccessToken(state.app)
export const getIsFetching = state => fromApp.getIsFetching(state.app)
export const getErrorMsg = state => fromApp.getErrorMsg(state.app)
export const getAlertMsg = state => fromApp.getAlertMsg(state.app)

export const getInformationListings = state =>
  fromListings.getInformationListings(state.listings)
