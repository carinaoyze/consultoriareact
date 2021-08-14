import React from 'react'
import MasterLayout from '../../components/MasterLayout';
import '../../assets/css/fale-conosco.css';
import { Helmet } from 'react-helmet-async';

export default function FaleConoscoPage() {
    return (
        <MasterLayout>
            <Helmet>
                <title>MeuCarango | Fale conosco</title>
            </Helmet>
            <main className="container fale-conosco">
                <h1 className="cabecalho-pagina">Fale conosco</h1>
                <p>
                    Para entrar em contato conosco, preencha o formulário abaixo:
                </p>
                <div className="flex">
                    <form>
                        <div className="campo">
                            <input type="text" placeholder="* Seu nome:" />
                        </div>
                        <div className="campo">
                            <input type="text" placeholder="* Seu e-mail:" />
                        </div>
                        <div className="campo">
                            <input type="text" placeholder="Seu telefone:" />
                        </div>
                        <div className="campo">
                            <input type="text" placeholder="* Assunto da mensagem:" />
                        </div>
                        <div className="campo">
                            <textarea placeholder="* Digite sua mensagem aqui..."></textarea>
                        </div>
                        <div className="campo">
                            <button className="btn lnk-destaque">
                                Enviar
                            </button>
                        </div>
                    </form>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14630.072660080848!2d-46.70888300985192!3d-23.54982653442388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57be69847fa9%3A0xd423d197dd9d1e01!2sVila%20Madalena%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1628782068029!5m2!1spt-BR!2sbr" allowFullscreen="" loading="lazy"></iframe>
                </div>
            </main>
        </MasterLayout>
    )
}