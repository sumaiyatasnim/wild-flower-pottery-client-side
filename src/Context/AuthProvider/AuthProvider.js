import React, { createContext } from 'react';
import useFireBase from '../../hooks/useFirebase';

export const AuthContext = createContext(null);
//prop drill na korei shob jaga theke acess pabo usefirebase er
//the routes and components are children here
const AuthProvider = ({ children }) => {
    const allContexts = useFireBase();
    return (
        //value deoar uddessho hocche prop drill na korei shob pawa
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;