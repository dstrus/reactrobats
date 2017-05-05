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
      className: '',
    }
  }

  editAcrobat = (ev, acrobat) => {
    ev.preventDefault()
    this.setState({ acrobat })
  }

  promoteAcrobat = (ev, acrobat) => {
    ev.preventDefault();
    const acrobats = {...this.state.acrobats}
    if (acrobat.className === 'promoted') {
      acrobat.className = ''
    } else {
      acrobat.className =  'promoted'
    }
    acrobats[acrobat.id] = acrobat
    this.setState({ acrobats })
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="medium-offset-2 medium-8 columns">
            <h1>Circus Royale</h1>
            <AcrobatForm
              saveAcrobat={this.saveAcrobat}
              acrobat={this.state.acrobat}
            />
          </div>
        </div>

        <AcrobatList
          acrobats={this.state.acrobats}
          promoteAcrobat={this.promoteAcrobat}
          editAcrobat={this.editAcrobat}
          removeAcrobat={this.removeAcrobat}
        />
      </div>
    );
  }
}

export default App
