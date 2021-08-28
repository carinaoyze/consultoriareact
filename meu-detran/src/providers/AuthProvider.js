import React, { useEffect, useState } from 'react';
import AuthContext from '../contexts/AuthContext';
import AuthService from '../services/AuthService';
import { clearAuth, getAuthToken } from '../utils';

export const AuthProvider = ({ children }) => {
    const [autenticado, setAutenticado] = useState(false);

    const logout = () => {
        clearAuth();
        setAutenticado(false);
    }

    const validateToken = async () => {
        const token = getAuthToken();
        const isValid = await AuthService.validateToken(token);
        if (!isValid) {
            clearAuth();
        }
        setAutenticado(isValid);
    }

    useEffect(() => {
        validateToken();
    }, []);

    return (
        <AuthContext.Provider value={ { autenticado, setAutenticado, logout } }>
            { children }
        </AuthContext.Provider>
    );
}
