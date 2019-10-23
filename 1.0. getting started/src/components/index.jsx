import React from "react"
import { connect } from "react-redux"

class IndexComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Getting Started with Redux Saga</h2>
        lets go!!
      </div>
    )
  }
}

export default connect()(IndexComponent)