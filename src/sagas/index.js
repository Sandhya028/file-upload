import { all } from "redux-saga/effects"
import listings from "./listings"

function* rootSaga() {
  yield all([listings()])
}

export default rootSaga
