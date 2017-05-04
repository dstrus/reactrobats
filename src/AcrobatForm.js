import React, { Component } from 'react'

class AcrobatForm extends Component {
  createAcrobat = (ev) => {
    ev.preventDefault()
    const acrobatId = `acrobat-${Date.now()}`;
    const acrobat = {
      id: acrobatId,
      name: this.acrobatName.value,
      act: this.acrobatAct.value,
      className: '',
    }
    this.props.addAcrobat(acrobat)
    this.acrobatForm.reset()
  }

  render() {
    return (
      <form 
        ref={(form) => this.acrobatForm = form}
        onSubmit={(ev) => this.createAcrobat(ev)}
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
    )
  }
}

export default AcrobatForm