import React, { Component } from 'react'
import './App.css';
import AcrobatList from './AcrobatList.js'
import AcrobatForm from './AcrobatForm.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      acrobats: {},
      acrobat: this.emptyAcrobat(),
    }
  }
  
  saveAcrobat = (acrobat) => {
    const acrobats = {...this.state.acrobats}
    acrobats[acrobat.id] = acrobat
    this.setState({ acrobats, acrobat: this.emptyAcrobat() })
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
    console.log('edit')
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
            <h2>League of Acrobats</h2>
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
        />
      </div>
    );
  }
}

export default App
