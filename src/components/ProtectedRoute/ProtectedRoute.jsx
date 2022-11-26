import React from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = ({ children }) => {

    if (true) {
        return <>{children}</>
    } else {
        return <Navigate to='/login' />
    }

}

export default ProtectedRoute