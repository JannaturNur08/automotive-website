import { useContext } from "react";
import { AuthContext } from "../Provider/Authentication";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
	if (user) {
		return children;
	}

	if (loading) {
		return <span className="loading loading-infinity loading-md"></span>;
	}

	return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;