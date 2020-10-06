import { connect } from "react-redux"

import { getInformationListings } from "../../reducers"
import {
  fetchInformationRequest,
  sendFileRequest
} from "../../actions/listings"

import FileUpload from "./FileUpload"

const mapStateToProps = state => ({
  informationListings: getInformationListings(state)
})

const FileUploadContainer = connect(mapStateToProps, {
  fetchInformationRequest,
  sendFileRequest
})(FileUpload)

export default FileUploadContainer
