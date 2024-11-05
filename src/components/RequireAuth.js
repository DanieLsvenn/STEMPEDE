import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    console.log("Auth object:", auth);
    console.log("User roles:", auth.roles);
    console.log("User: ", auth?.user);
    console.log("Allowed roles:", allowedRoles);
    console.log("Current auth state:", auth);

    // Check if the user has any of the allowed roles
    if (auth?.user) {
        const hasAccess = auth.roles?.some(role => allowedRoles.includes(role));
        console.log("Has Access:", hasAccess);
        
        if (hasAccess) {
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