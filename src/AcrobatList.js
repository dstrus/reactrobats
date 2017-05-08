import React, { Component } from 'react'
import Acrobat from './Acrobat.js'

class AcrobatList extends Component {
  sortAcrobats = (a, b) => {
    return this.props.acrobats[a].position - this.props.acrobats[b].position
  }

  render() {
    const acrobats = this.props.acrobats
    const actions = {...this.props}
    return (
      <ul className="no-bullet">
        {
          Object.keys(acrobats)
            .sort(this.sortAcrobats)
            .map(id => <Acrobat key={id} acrobat={acrobats[id]} {...actions} mostRecentlyMoved={this.props.mostRecentlyMoved} />)
        }
      </ul>
    )
  }
}

export default AcrobatList