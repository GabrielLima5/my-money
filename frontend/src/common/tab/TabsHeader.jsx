import React from 'react'

const TabsHeader = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <ul className="nav nav-pills">
        {props.children}
      </ul>
    </nav>
  )
}

export default TabsHeader