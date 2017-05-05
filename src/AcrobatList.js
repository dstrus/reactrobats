import React, { Component } from 'react'
import Acrobat from './Acrobat.js'

class AcrobatList extends Component {
  render() {
    const acrobats = this.props.acrobats
    return (
      <ul className="no-bullet">
        {
          Object.keys(acrobats)
            .sort((a, b) => acrobats[a].position - acrobats[b].position)
            .map((id) => {
              return (
                <Acrobat
                  acrobat={acrobats[id]}
                  saveAcrobat={this.props.saveAcrobat}
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