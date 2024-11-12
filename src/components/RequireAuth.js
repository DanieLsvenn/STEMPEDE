import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { user, roles, accessToken, refreshToken } = JSON.parse(localStorage.getItem("currentUser")) || {};
    const location = useLocation();
    console.log("Auth object:", user);
    console.log("User roles:", roles);
    console.log("User: ", user);
    console.log("Allowed roles:", allowedRoles);
    console.log("Current auth state:", user);
    const isTokenExpired = () => {
        const expirationTime = localStorage.getItem('accessTokenExpiration');
        return expirationTime ? Date.now() > expirationTime : true; // Return true if expired or not set
      };
    // Check if the user has any of the allowed roles
    if (user && accessToken) {
        const hasAccess = roles?.some(role => allowedRoles.includes(role));
        console.log("Has Access:", hasAccess);
        
        if (hasAccess && !isTokenExpired()) {
            console.log("Access granted: User has the required role.");
            return <Outlet />; // Render the child components
        } else {
            console.log("Access denied: User does not have the required role.");
            return <Navigate to="/" state={{ from: location }} replace />; // Redirect to home if no access
        }
    }

    // If not authenticated, redirect to login
    console.log("User not authenticated, redirecting to login.");
    return <Navigate to="/login" state={{ from: location }} replace />;
}

export default RequireAuth;