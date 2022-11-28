import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Login from '../Login/Login';

const PrivateSeller = ({children}) => {
    const { user } = useContext(AuthContext)


    const [currentUser, setCurrentUser] = useState('');


    useEffect(() => {

        fetch(`https://purana-bazar-server-arkoroybadhon.vercel.app/currentusers?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setCurrentUser(data))
            .catch(err => console.log(err))
    }, [user])


    if(currentUser?.role === 'Seller') {
        return children;
    }

    return <Login></Login>
};

export default PrivateSeller;