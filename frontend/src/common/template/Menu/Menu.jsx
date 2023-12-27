import React from 'react'
import MenuItem from '../MenuItem/MenuItem'

const Menu = () => {
  return (
    <ul className="sidebar-menu p-0">
        <MenuItem path="/" label="Dashboard" icon="dashboard" />
        <MenuItem path="/billingcycles" label="Ciclos de Pagamento" icon="usd" />
    </ul>
  )
}

export default Menu