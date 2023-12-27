import React from 'react'
import Menu from '../Menu/Menu'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <aside className="main-sidebar">
        <section className="sidebar">
            <Menu />
        </section>
    </aside>
  )
}

export default Sidebar