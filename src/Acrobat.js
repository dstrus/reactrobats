import React, { Component } from 'react'

class Acrobat extends Component {
  render() {
    return (
      <li 
        className={`clearfix acrobat ${this.props.acrobat.className}`}
        key={this.props.acrobat.id}
      >
        <span className="acrobat-name">
          {this.props.acrobat.name}, Master of {this.props.acrobat.act}
        </span>
        
        <span className="actions expanded button-group">
          <button
            className="promote warning button"
            onClick={(ev) => this.props.promoteAcrobat(ev, this.props.acrobat)}
          >
            <i className="fa fa-star"></i>
          </button>
        </span>
      </li>
    )
  }
}

export default Acrobat