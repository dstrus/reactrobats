import React, { Component } from 'react'
import './App.css';
import AcrobatList from './AcrobatList.js'
import AcrobatForm from './AcrobatForm.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      acrobats: {}
    }
  }
  
  addAcrobat = (acrobat) => {
    const acrobats = {...this.state.acrobats}
    acrobats[acrobat.id] = acrobat
    this.setState({ acrobats })
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
            <AcrobatForm addAcrobat={this.addAcrobat} />
          </div>
        </div>

        <AcrobatList acrobats={this.state.acrobats} promoteAcrobat={this.promoteAcrobat} />
      </div>
    );
  }
}

export default App
