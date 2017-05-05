import React, { Component } from 'react'

class Acrobat extends Component {
  render() {
    const acrobat = this.props.acrobat
    return (
      <li 
        className={`clearfix acrobat ${acrobat.className}`}
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
            onClick={ev => this.props.promoteAcrobat(ev, acrobat)}
          >
            <i className="fa fa-star"></i>
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