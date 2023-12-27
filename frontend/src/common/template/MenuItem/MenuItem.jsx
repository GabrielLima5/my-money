import React from 'react'
import './MenuItem.css'
import { Link } from 'react-router-dom'

const MenuItem = (props) => {
  return (
    <li className="menu-item">
        <Link to={`${props.path}`}>
            <i className={`fa fa-${props.icon}`}></i>
            <span>{props.label}</span>
        </Link>
    </li>
  )
}

export default MenuItem