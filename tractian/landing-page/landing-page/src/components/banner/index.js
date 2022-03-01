import React from "react";
import BannerImage from '../../images/banner-bk.jpg';
import './Banner.css';

export default function Banner(){
    return (
        <section className="banner--section" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="container banner--container">
                <div className="banner--infos">
                    <h1>
                        Suas máquinas com melhor desempenho
                    </h1>
                    <p>
                        A melhor solução de monitoramento online e gestão de ativos.<br />Conecte, gerencie e monitore suas máquinas tudo em um só lugar!
                    </p>
                    <a className="button--primary" href="#">Solicitar demonstração</a>
                </div>
            </div>
        </section>
    );
}