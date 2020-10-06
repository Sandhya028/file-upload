import React, { useState, useRef } from "react"
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css"
import "react-confirm-alert/src/react-confirm-alert.css" // Import css
import { Button, Modal, Form } from "react-bootstrap"
import JSZip from "jszip"
import { checkValiadtion } from "../../utils/validation"
import {
  ALERT_MSG_ERROR,
  ALERT_MSG_INFO,
  ALERT_MSG_WARN,
  ALERT_MSG_SUCCESS
} from "../../constants"

let file = ""
let picture = ""
const AddFiles = ({ isAddFile, sendFileRequest }) => {
  const [addFileModel, setAddFileModal] = useState(true)
  const [isErrorImage, setIsErrorImage] = useState(false)
  const [isErrorFile, setIsErrorfile] = useState(false)
  const [imageState, setImageState] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  )

  const headerStyle = {
    color: "black"
  }

  const LabelStyle = {
    margin: "0",
    width: "250px",
    float: "left",
    paddingRight: "15px",
    lineHeight: "50px",
    textAlign: "right",
    color: "rgba(25, 38, 48, 0.5)",
    fontWeight: "500"
  }

  const FormControlStyle = {
    height: "40px",
    padding: "0 10px",
    float: "left",
    fontSize: "15px",
    color: "#212529",
    background: "#fff !important",
    border: "1px solid rgba(25, 38, 48, 0.5)"
  }

  const onImageChange = e => {
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImageState(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
    picture = e.target.files[0]
  }

  const onFileChange = e => {
    let selectedFile = e.target.files[0]
    file = selectedFile
  }

  return (
    <div className="animated">
      <Modal
        size="lg"
        centered
        show={addFileModel}
        onHide={() => {
          setAddFileModal(false)
          if (isAddFile != undefined) isAddFile(false)
        }}
      >
        <Modal.Header>
          <Modal.Title
            className="add_files"
            style={{ color: "black" }}
            closeButton
          >
            Add Files
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            maxHeight: "calc(100vh - 110px)",
            overflowY: "auto"
          }}
        >
          <Form>
            <div className="row">
              <div className="col-2">
                <Form.Group controlId="ControlTextarea1">
                  <Form.Label>Upload Image: </Form.Label>
                </Form.Group>
              </div>
              <div className="col-2">
                <Form.Group controlId="ControlTextarea1">
                  <div className="image-upload">
                    <label htmlFor="file-input"></label>
                    <input
                      id="file-input"
                      accept=".gif, .jpg, .png"
                      type="file"
                      onChange={onImageChange}
                      multiple
                    />
                  </div>
                </Form.Group>
                <div>
                  {isErrorImage ? (
                    <span style={{ color: "red", float: "left" }}>
                      Image is Required
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="col-8">
                <Form.Group controlId="ControlTextarea1">
                  <div className="image-upload">
                    <div className="img-holder">
                      <img
                        src={imageState}
                        alt=""
                        id="img"
                        className="img"
                        height="200px"
                        width="200px"
                        style={{ float: "right" }}
                      />
                    </div>
                  </div>
                </Form.Group>
                <div
                  style={{
                    float: "right",
                    marginTop: "182px",
                    marginRight: "-134px"
                  }}
                >
                  <span>Preview</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <Form.Group controlId="ControlTextarea1">
                  <Form.Label>Attachment: </Form.Label>
                </Form.Group>
              </div>
              <div className="col-2">
                <Form.Group controlId="ControlTextarea1">
                  <div className="image-upload">
                    <label htmlFor="file-input"></label>
                    <input
                      id="file-input"
                      accept=".pdf, .txt"
                      type="file"
                      onChange={onFileChange}
                      multiple
                    />
                  </div>
                </Form.Group>
                <div>
                  {isErrorFile ? (
                    <span style={{ color: "red", float: "left" }}>
                      file is Required
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              setAddFileModal(false)
              if (isAddFile != undefined) isAddFile(false)
            }}
          >
            Close
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setAddFileModal(true)
              if (isAddFile != undefined) isAddFile(true)
              var isValid = checkValiadtion(picture, file)
              if (isValid === "both") {
                setIsErrorImage(true)
                setIsErrorfile(true)
              } else if (isValid === "image") {
                setIsErrorImage(true)
                setIsErrorfile(false)
              } else if (isValid === "file") {
                setIsErrorImage(false)
                setIsErrorfile(true)
              } else {
                const formData = new FormData()
                formData.append("picture", picture)
                formData.append("file", file)
                sendFileRequest(formData)
                setIsErrorImage(false)
                setIsErrorfile(false)
                setAddFileModal(false)
                if (isAddFile != undefined) isAddFile(false)
              }
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddFiles
