import React from "react"
import { Spinner } from "react-bootstrap"

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: "100px",
        height: "100px",
        margin: "ms-auto",
      }}
    >
        <span class='sr-only'>Loading...</span>
    </Spinner>
  )
}

export default Loader
