import React from "react"
import { Row, Col } from "reactstrap"

const Spinner = spinnerTime => {
  return (
    <Row className="justify-content-center">
      <Col>
        <div className="sk-wave">
          <div className="sk-rect sk-rect1" />
          &nbsp;
          <div className="sk-rect sk-rect2" />
          &nbsp;
          <div className="sk-rect sk-rect3" />
          &nbsp;
          <div className="sk-rect sk-rect4" />
          &nbsp;
          <div className="sk-rect sk-rect5" />
        </div>
      </Col>
    </Row>
  )
}

export default Spinner
