import React, { useEffect, useState } from "react"

import { Button, Input } from "reactstrap"
import { Row, Col, Form, OverlayTrigger, Tooltip, Modal } from "react-bootstrap"
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table"
import Spinner from "../../components/Spinner"
import InformationDataTable from "./Information"
const FileUpload = ({
  fetchInformationRequest,
  informationListings,
  sendFileRequest
}) => {
  return (
    <div className="animated fadeIn">
      <div className="inner_main">
        <div className="full_width">
          <div className="row">
            <div className="white_box mrgbtm50">
              <div className="cm_ttl">
                <h2>Information</h2>
              </div>
              <div className="inner_box_body padL3T5">
                <div className="tbl_main flow_table">
                  <div className="inner_tbl">
                    <InformationDataTable
                      informationListings={informationListings}
                      sendFileRequest={sendFileRequest}
                      fetchInformationRequest={fetchInformationRequest}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FileUpload
