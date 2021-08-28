import { createContext } from "react";

const AuthContext = createContext({
    autenticado: false,
    setAutenticado: (status) => {},
    logout: () => {}
});

export default AuthContext;