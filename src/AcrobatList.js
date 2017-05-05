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
                  key={id}
                  acrobat={acrobats[id]}
                  acrobats={this.props.acrobats}
                  saveAcrobat={this.props.saveAcrobat}
                  editAcrobat={this.props.editAcrobat}
                  removeAcrobat={this.props.removeAcrobat}
                  moveUp={this.props.moveUp}
                  moveDown={this.props.moveDown}
                />
              )
            })
        }
      </ul>
    )
  }
}

export default AcrobatList