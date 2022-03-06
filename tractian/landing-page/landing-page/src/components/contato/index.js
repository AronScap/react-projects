import React from "react";
import ContatoBg from '../../images/contact-bk.jpg';
import './Contato.css';

export default function Contato(){
    return (
        <section className="contato-section" style={{ backgroundImage: `url(${ContatoBg})` }}>
            <div className="container">
                <div className="contato-infos">
                    <div className="">
                        <h2 className="contato-title">Entre em Contato</h2>
                        <p className="contato-description">A melhor solução de monitoramento online e gestão de ativos.<br />Conecte, gerencie e monitore suas máquinas tudo em um só lugar!</p>
                        <ul class="contato-list">
                            <li>E-mail: contato@tractian.com</li>
                            <li>Telefone: 49 9999-9999</li>
                            <li>Endereço: Rua Teste Cidade - XX</li>
                        </ul>
                    </div>
                    <div className="contato-formulario">
                        <form>
                            <div className="">
                                <div className="">
                                    <label for="name">Nome Completo:</label>
                                    <input type="name" className="form-control" id="name" />
                                </div>
                                <div className="">
                                    <label for="Email">Seu melhor e-mail:</label>
                                    <input type="email" className="form-control" id="Email" />
                                </div>
                            </div>
                            <div className="">
                                <label for="message">Message:</label>
                                <textarea className="form-control" id="message" rows="3"></textarea>
                            </div>
                            <a type="submit" className="button--primary">Enviar</a>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}