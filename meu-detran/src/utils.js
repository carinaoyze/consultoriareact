export const MEU_DETRAN_API = 'https://meudetran-api.herokuapp.com';
export const getAuthToken = () => localStorage.getItem('MEU_DETRAN_AUTH_TOKEN');
export const setAuthToken = (token) => localStorage.setItem('MEU_DETRAN_AUTH_TOKEN', token);
export const setUser = (nome) => localStorage.setItem('MEU_DETRAN_USER_NAME', nome);
export const getUser = () => localStorage.getItem('MEU_DETRAN_USER_NAME');
export const clearAuth = () => localStorage.clear();