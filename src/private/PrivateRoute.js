import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoute = () => {
    const token = localStorage.getItem('token')
    const data = token != undefined ? true : false
    return data ? (
        <Outlet />
    ) :
        <Navigate to={'/login'} />
}