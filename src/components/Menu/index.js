import React, { PropTypes } from 'react';
import { Link } from 'react-router'

export default class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav className="bg-blue1 fixed absolute--fill">
        <a onClick={this.props.onClick} className="white f1 tr db pr3 pt2">&#x2715;</a>
        {/* <div className="">ScaleConf</div> */}
        <ul className="list tc pl0 eau-bold">
          <li className="pv3">
            <a href="" className="no-underline white ttu f4">About</a>
          </li>
          <li className="pv3">
            <a href="" className="no-underline white ttu f4">Team</a>
          </li>
          <li className="pv3">
            <a href="" className="no-underline white ttu f4">Offices</a>
          </li>
          <li className="pv3">
            <a href="" className="no-underline white ttu f4">How It Works</a>
          </li>
          <li className="pv3">
            <a href="" className="no-underline white ttu f4">Programs</a>
          </li>
          <li className="pv3">
            <Link to="#partner" className="no-underline white ttu f4">Partner</Link>
            {/* <a href="" className="no-underline white ttu f4">Sponsors</a> */}
          </li>
        </ul>
      </nav>
    )
  }
}

Menu.propTypes = {
  onClick: PropTypes.func.isRequired
}
