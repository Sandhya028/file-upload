import React, { useState, useRef, useEffect } from "react"
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table"
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css"
import "react-confirm-alert/src/react-confirm-alert.css" // Import css
import Spinner from "../../components/Spinner"
import { Button, Modal, OverlayTrigger, Tooltip, Form } from "react-bootstrap"
import AddFiles from "./AddFiles"
import { withRouter } from "react-router-dom"
const InformationDataTable = ({
  informationListings,
  sendFileRequest,
  fetchInformationRequest
}) => {
  const [showAddFile, setshowAddFile] = useState(false)
  const [id, setId] = useState("")
  console.log(informationListings)
  var data = []
  data.push(informationListings.data)
  const options = {
    page: 1, // which page you want to show as default
    sizePerPage: 5, // which size per page you want to locate as default
    pageStartIndex: 1, // where to start counting the pages
    paginationSize: 3, // the pagination bar size.
    prePage: "Prev", // Previous page button text
    nextPage: "Next", // Next page button text
    firstPage: "First", // First page button text
    lastPage: "Last", // Last page button text
    paginationShowsTotal: true, // Accept bool or function
    hideSizePerPage: true, //> You can hide the dropdown for sizePerPage
    alwaysShowAllBtns: true, // Always show next and previous button
    withFirstAndLast: true, //> Hide the going to First and Last page button
    expandBy: "column"
  }
  const imageFormat = (cell, row) => {
    debugger

    var pic = require("./../../assets/img/" + cell)

    return (
      <div>
        <img
          //src=""
          src={pic}
          alt=""
          id="img"
          className="img"
          height="200px"
          width="200px"
          style={{ float: "right" }}
        />
      </div>
    )
  }

  const pdfFormate = (cell, row) => {
    return <div></div>
  }
  return (
    <div className="animated">
      <div className="row">
        <div className="col-2">
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>Add Files</Tooltip>}
          >
            <Button
              active
              color="primary"
              aria-pressed="true"
              onClick={() => {
                setshowAddFile(true)
              }}
            >
              Add Files
            </Button>
          </OverlayTrigger>
        </div>
        <div className="col-2">
          <Form.Control
            placeholder="Enter Id"
            value={id}
            onChange={evt => setId(evt.target.value)}
          />
        </div>
        <div className="col-2">
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>get Information By Id</Tooltip>}
          >
            <Button
              active
              color="primary"
              aria-pressed="true"
              onClick={() => {
                var infoId = id
                fetchInformationRequest({ id: infoId })
              }}
            >
              get Info
            </Button>
          </OverlayTrigger>
        </div>
      </div>
      <BootstrapTable
        data={data}
        version="4"
        striped
        hover
        pagination
        options={options}
      >
        <TableHeaderColumn dataField="id" isKey hidden>
          Id
        </TableHeaderColumn>
        <TableHeaderColumn dataField="picture" dataFormat={imageFormat}>
          Pictures
        </TableHeaderColumn>
        <TableHeaderColumn dataField="file" dataFormat={pdfFormate}>
          File
        </TableHeaderColumn>
      </BootstrapTable>

      {showAddFile ? (
        <AddFiles
          sendFileRequest={sendFileRequest}
          isAddFile={isAddfileOpen => setshowAddFile(isAddfileOpen)}
        />
      ) : (
        ""
      )}
    </div>
  )
}

export default withRouter(InformationDataTable)
