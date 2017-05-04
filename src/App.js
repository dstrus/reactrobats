import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.acrobat = {
      name: '',
      act: '',
    }
    this.state = {
      acrobats: []
    }
  }
  
  addAcrobat(ev) {
    ev.preventDefault()
    const acrobats = [...this.state.acrobats]
    const acrobat = {
      name: this.acrobatName.value,
      act: this.acrobatAct.value,
    }
    acrobats.push(acrobat)
    this.setState({ acrobats })
    this.acrobatForm.reset()
  }
  
  renderAcrobat(acrobat, i) {
    return (
      <li className="clearfix" key={i}>{acrobat.name}, Master of {acrobat.act}</li>
    )
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
              {this.state.acrobats.map(this.renderAcrobat)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
