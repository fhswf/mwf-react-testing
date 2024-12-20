import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    
    const { accessToken } = useSelector((state: RootState) => state.auth);

    if (!accessToken) {
        return <Navigate to={'/login'} />;
    }

    return children;
};

export { ProtectedRoute };