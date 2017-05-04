import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.acrobat = {
      name: '',
      act: '',
      className: '',
    }
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

  promoteAcrobat(ev, acrobat) {
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
  
  renderAcrobat = (acrobat) => {
    return (
      <li className={`clearfix acrobat ${acrobat.className}`} key={acrobat.id}>
        <span className="acrobat-name">
          {acrobat.name}, Master of {acrobat.act}
        </span>
        
        <span className="actions expanded button-group">
          <button
             className="promote warning button"
             onClick={(ev) => this.promoteAcrobat(ev, acrobat)}
          >
            <i className="fa fa-star"></i>
          </button>
        </span>
      </li>
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
              {
                Object.keys(this.state.acrobats)
                  .map((id) => this.renderAcrobat(this.state.acrobats[id]))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
