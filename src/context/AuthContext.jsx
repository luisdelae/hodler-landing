import { LocalSeeSharp } from '@mui/icons-material';
import { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const userId = localStorage.getItem('userId');
        const username = localStorage.getItem('username');

        if (token && userId && username) {
            setUser({ token, userId, username });
        }

        setLoading(false);
    }, []);

    const login = (token, userId, username) => {
        localStorage.setItem('authToken', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('username', username);

        setUser({ token, userId, username });
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
        setUser(null);
    };

    const register = (token, userId, username) => {
        login(token, userId, username);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthpProvider');
    }
    return context;
}
