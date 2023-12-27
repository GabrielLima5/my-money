import {Routes, Route } from 'react-router-dom'

import Dashboard from './Dashboard2/Dashboard2'
import BillingCycle from './BillingCycle/BillingCycle'

const RoutesConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/billingcycles" element={<BillingCycle />} />
            <Route path="*" element={<Dashboard />} />
        </Routes>
    )
}

export default RoutesConfig