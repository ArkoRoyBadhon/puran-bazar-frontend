import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Login from '../Login/Login';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)

    if(!user) {
        return <Login></Login>
    }

    return children;


}
export default PrivateRoute;