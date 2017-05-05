import React, { Component } from 'react'
import Acrobat from './Acrobat.js'

class AcrobatList extends Component {
  render() {
    return (
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
    )
  }
}

export default AcrobatList