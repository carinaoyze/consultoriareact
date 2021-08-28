import { MEU_DETRAN_API, setAuthToken, setUser } from "../utils";

export default class AuthService 
{
    static async autenticar(usuario, senha) 
    {
        const authInfo = { usuario, senha };
        const url = MEU_DETRAN_API + '/v1/login';

        const resposta = await fetch( url, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(authInfo)
        });

        const dadosAutenticacao = await resposta.json();
        if (dadosAutenticacao.status === 0) {
            throw new Error(dadosAutenticacao.message);
        }

        const { nome, token } = dadosAutenticacao.user;
        setUser(nome);
        setAuthToken(token);
    }

    static async validateToken(token)
    {
        if (!token) return false;
        
        const url = MEU_DETRAN_API + '/v1/validate-token';
        const resposta = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        });
        const dadosValidacao = await resposta.json();

        if (dadosValidacao.status === 0) {
            return false;
        }

        return true;
    }
}