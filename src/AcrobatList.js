import React, { Component } from 'react'
import Acrobat from './Acrobat.js'

class AcrobatList extends Component {
  sortAcrobats = (a, b) => {
    return this.props.acrobats[a].position - this.props.acrobats[b].position
  }

  render() {
    const acrobats = this.props.acrobats
    const actions = {
      acrobats: this.props.acrobats,
      saveAcrobat: this.props.saveAcrobat,
      editAcrobat: this.props.editAcrobat,
      removeAcrobat: this.props.removeAcrobat,
      moveUp: this.props.moveUp,
      moveDown: this.props.moveDown,
    }
    return (
      <ul className="no-bullet">
        {
          Object.keys(acrobats)
            .sort(this.sortAcrobats)
            .map(id => <Acrobat key={id} acrobat={acrobats[id]} {...actions} />)
        }
      </ul>
    )
  }
}

export default AcrobatList