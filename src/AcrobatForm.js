import React, { Component } from 'react'

class AcrobatForm extends Component {
  componentDidMount() {
    this.acrobatForm.reset()
  }

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
    this.acrobatForm.reset()
    this.acrobatName.focus()
  }

  updateAcrobat = () => {
    let acrobat = {...this.props.acrobat}
    acrobat.name = this.acrobatName.value
    acrobat.act = this.acrobatAct.value
    this.props.saveAcrobat(acrobat)
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
  }

  render() {
    return (
      <form 
        ref={(form) => this.acrobatForm = form}
        onSubmit={(ev) => this.saveAcrobat(ev)}
      >
        <input
          autoFocus
          required
          ref={(input) => this.acrobatName = input}
          defaultValue={this.props.acrobat.name}
          type="text" placeholder="Acrobat Name"
        />
        <input
          required
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