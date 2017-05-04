import React, { Component } from 'react'

class AcrobatForm extends Component {
  isExistingAcrobat = () => {
    return this.props.acrobat.id && true
  }

  buttonText = () => {
    return this.isExistingAcrobat() ? 'Save Changes' : 'Sign Me Up!'
  }

  saveAcrobat = (ev) => {
    ev.preventDefault()
    if (this.props.acrobat.id) {
      this.updateAcrobat()
    } else {
      this.createAcrobat()
    }
  }

  updateAcrobat = () => {
    let acrobat = {...this.props.acrobat}
    acrobat.name = this.acrobatName.value
    acrobat.act = this.acrobatAct.value
    this.props.saveAcrobat(acrobat)
    this.acrobatForm.reset()
  }

  createAcrobat = () => {
    const acrobatId = `acrobat-${Date.now()}`;
    const acrobat = {
      id: acrobatId,
      name: this.acrobatName.value,
      act: this.acrobatAct.value,
      className: '',
    }
    this.props.saveAcrobat(acrobat)
    this.acrobatForm.reset()
  }

  render() {
    return (
      <form 
        ref={(form) => this.acrobatForm = form}
        onSubmit={(ev) => this.saveAcrobat(ev)}
      >
        <input
          ref={(input) => this.acrobatName = input}
          defaultValue={this.props.acrobat.name}
          type="text" placeholder="Acrobat Name"
        />
        <input 
          ref={(input) => this.acrobatAct = input}
          defaultValue={this.props.acrobat.act}
          type="text" placeholder="Death-Defying Act"
        />
        <button type="submit" className="expanded success button">{this.buttonText()}</button>
      </form>
    )
  }
}

export default AcrobatForm