import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";




const PrivateRoute = ({ children }) => {
    
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    if (user) {
        return children
    } else {
        navigate('/')
    }

    return (
        <div>

        </div>
    );
};

export default PrivateRoute;