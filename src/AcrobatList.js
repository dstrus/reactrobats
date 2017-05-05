import React, { Component } from 'react'
import Acrobat from './Acrobat.js'

class AcrobatList extends Component {
  render() {
    return (
      <div className="row">
        <div className="medium-8 medium-offset-2 columns">
          <h2>Tonight's Acts</h2>
          <ul className="no-bullet">
            {
              Object.keys(this.props.acrobats)
                .map((id) => {
                  return (
                    <Acrobat
                      acrobat={this.props.acrobats[id]}
                      promoteAcrobat={this.props.promoteAcrobat}
                      editAcrobat={this.props.editAcrobat}
                      removeAcrobat={this.props.removeAcrobat}
                      key={id}
                    />
                  )
                })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default AcrobatList