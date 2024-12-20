import { Navigate } from "react-router-dom";



const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    
    const accessToken = '';

    if (!accessToken) {
        return <Navigate to={'/login'} />;
    }

    return children;
};

export { ProtectedRoute };