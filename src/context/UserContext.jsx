import {createContext, useState} from 'react';
import PropTypes from 'prop-types';
const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const saveUser = (user, token) => {
        setUser(user);
        setToken(token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    }

    const getUser = () => {
        const user = localStorage.getItem('user');
        if (user && !user) { // Check if user is not already set
            setUser(JSON.parse(user));
          }


    }

    return (
        <UserContext.Provider value={{
            user,
            saveUser,
            getUser,
            logout,
            token,
        }} >
            {children}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired
    }


export {UserContext, UserProvider};