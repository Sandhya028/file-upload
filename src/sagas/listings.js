import { takeEvery, call, put } from "redux-saga/effects"
import * as appActions from "../actions/app"
import * as actions from "../actions/listings"
import * as api from "../api/listings"
function* fetchInformationSaga(action) {
  try {
    const { data } = yield call(api.fetchInformation, action.payload)
    yield put(actions.fetchInformationSuccess(data))
  } catch (error) {
  } finally {
  }
}

function* sendFileSaga(action) {
  const data = action.payload
  try {
    const { data: success } = yield call(api.sendFile, data)
    success
      ? yield put(
          appActions.appReceiveAlert({
            message: "Succeed adding file and iamge!"
          })
        )
      : yield put(
          appActions.appReceiveAlert({
            message: "Something went wrong!"
          })
        )
  } catch (error) {
  } finally {
  }
}

function* watchListingSaga() {
  yield takeEvery(actions.FETCH_INFORMATION_REQUEST, fetchInformationSaga)
  yield takeEvery(actions.SEND_FILE_REQUEST, sendFileSaga)
}

export default watchListingSaga
