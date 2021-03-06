import React, { Component } from 'react'

class Acrobat extends Component {
  togglePromotion = (ev, acrobat) => {
    ev.preventDefault()
    const updatedAcrobat = {...acrobat}
    updatedAcrobat.promoted = !acrobat.promoted
    this.props.saveAcrobat(updatedAcrobat)
  }

  className = (acrobat) => {
    let classNames = []
    if (acrobat.promoted) {
      classNames.push('promoted')
    }
    if (this.props.mostRecentlyMoved === acrobat.id) {
      classNames.push('highlight')
    }
    return classNames.join(' ')
  }

  isFirst = () => {
    return this.props.acrobat.position === 1
  }

  isLast = () => {
    return this.props.acrobat.position === Object.keys(this.props.acrobats).length
  }

  render() {
    const acrobat = this.props.acrobat
    let moveUpProps = {}
    let moveDownProps = {}
    if (this.isFirst()) {
      moveUpProps.disabled = 'disabled'
    }
    if (this.isLast()) {
      moveDownProps.disabled = 'disabled'
    }

    return (
      <li 
        className={`clearfix acrobat ${this.className(acrobat)}`}
        key={acrobat.id}
      >
        <span className="acrobat-name">
          {acrobat.name}, Master of {acrobat.act}
        </span>
        
        <span className="actions expanded button-group">
          <button
            className="edit button"
            onClick={ev => this.props.editAcrobat(ev, acrobat)}
          >
            <i className="fa fa-pencil"></i>
          </button>
          <button
            className="promote warning button"
            onClick={ev => this.togglePromotion(ev, acrobat)}
          >
            <i className="fa fa-star"></i>
          </button>
          <button
            className="button"
            onClick={ev => this.props.moveUp(ev, acrobat)}
            {...moveUpProps}
          >
            <i className="fa fa-arrow-up"></i>
          </button>
          <button
            className="button"
            onClick={ev => this.props.moveDown(ev, acrobat)}
            {...moveDownProps}
          >
            <i className="fa fa-arrow-down"></i>
          </button>
          <button
            className="remove alert button"
            onClick={ev => this.props.removeAcrobat(ev, acrobat)}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </span>
      </li>
    )
  }
}

export default Acrobat