import React, { Component } from 'react'
import './App.css';
import Acrobat from './Acrobat.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      acrobats: {}
    }
  }
  
  addAcrobat(ev) {
    ev.preventDefault()
    const acrobats = {...this.state.acrobats}
    const acrobatId = `acrobat-${Date.now()}`;
    const acrobat = {
      id: acrobatId,
      name: this.acrobatName.value,
      act: this.acrobatAct.value,
      className: '',
    }
    acrobats[acrobatId] = acrobat
    this.setState({ acrobats })
    this.acrobatForm.reset()
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
            <form 
              ref={(form) => this.acrobatForm = form}
              onSubmit={(ev) => this.addAcrobat(ev)}
            >
              <input 
                ref={(input) => this.acrobatName = input}
                type="text" placeholder="Acrobat Name"
              />
              <input 
                ref={(input) => this.acrobatAct = input}
                type="text" placeholder="Death-Defying Act"
              />
              <button type="submit" className="expanded success button">Sign Me Up</button>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="medium-8 medium-offset-2 columns">
            <ul className="no-bullet">
              {
                Object.keys(this.state.acrobats)
                  .map((id) => {
                    return (
                      <Acrobat
                        acrobat={this.state.acrobats[id]}
                        promoteAcrobat={this.promoteAcrobat}
                        key={id}
                      />
                    )
                  })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App
