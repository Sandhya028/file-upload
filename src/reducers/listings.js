import * as actions from "../actions/listings"

const initialListing = {
  ids: [],
  dict: {}
}

const listings = (
  state = {
    InformationListing: []
  },
  action
) => {
  switch (action.type) {
    case actions.FETCH_INFORMATION_SUCCESS:
      return { ...state, InformationListing: action.payload }
    default:
      return state
  }
}

export default listings

export const getInformationListings = state => state.InformationListing
