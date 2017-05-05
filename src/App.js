import React, { Component } from 'react'
import './App.css';
import AcrobatList from './AcrobatList.js'
import AcrobatForm from './AcrobatForm.js'
import base from './base'

class App extends Component {
  constructor() {
    super()
    this.state = {
      acrobats: {},
      acrobat: this.emptyAcrobat(),
    }
  }

  componentWillMount() {
    this.ref = base.syncState(
      'acrobats',
      {
        context: this,
        state: 'acrobats',
      }
    )

    const acrobatsRef = localStorage.getItem('acrobats')

    if (acrobatsRef) {
      this.setState({
        acrobats: JSON.parse(acrobatsRef)
      })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('acrobats', JSON.stringify(nextState.acrobats))
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }
  
  saveAcrobat = (acrobat) => {
    const acrobats = {...this.state.acrobats}
    acrobats[acrobat.id] = acrobat
    this.setState({ acrobats, acrobat: this.emptyAcrobat() })
  }

  removeAcrobat = (ev, acrobat) => {
    ev.preventDefault()
    const acrobats = {...this.state.acrobats}
    acrobats[acrobat.id] = null
    this.setState({ acrobats })
  }

  emptyAcrobat = () => {
    return {
      id: null,
      name: '',
      act: '',
      promoted: false,
      position: 0,
    }
  }

  editAcrobat = (ev, acrobat) => {
    ev.preventDefault()
    this.setState({ acrobat })
  }

  moveUp = (ev, acrobat) => {
    ev.preventDefault()
    if (acrobat.position === 1) return // already first
    const acrobats = {...this.state.acrobats}
    for (let otherId of Object.keys(acrobats)) {
      let otherAcrobat = acrobats[otherId]
      if (otherAcrobat.position === acrobat.position - 1) {
        otherAcrobat.position ++
        this.saveAcrobat(otherAcrobat)
        break
      }
    }
    acrobat.position --
    this.saveAcrobat(acrobat)
  }

  moveDown = (ev, acrobat) => {
    ev.preventDefault()
    const acrobats = {...this.state.acrobats}
    if (acrobat.position === this.acrobatCount()) return // already last
    for (let otherId of Object.keys(acrobats)) {
      let otherAcrobat = acrobats[otherId]
      if (otherAcrobat.position === acrobat.position + 1) {
        otherAcrobat.position --
        this.saveAcrobat(otherAcrobat)
        break
      }
    }
    acrobat.position ++
    this.saveAcrobat(acrobat)
  }

  acrobatCount = () => {
    return Object.keys(this.state.acrobats).length
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="medium-8 medium-offset-2 columns acrobat-list">
            <h2>Grandest Night <small>of</small> the Season</h2>
            <AcrobatForm
              saveAcrobat={this.saveAcrobat}
              acrobat={this.state.acrobat}
              acrobatCount={this.acrobatCount()}
            />

            <AcrobatList
              acrobats={this.state.acrobats}
              saveAcrobat={this.saveAcrobat}
              editAcrobat={this.editAcrobat}
              removeAcrobat={this.removeAcrobat}
              moveUp={this.moveUp}
              moveDown={this.moveDown}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App
