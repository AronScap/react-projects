import React from "react";
import Icon1 from '../../images/icon1.png';
import Icon2 from '../../images/icon2.png';
import Icon3 from '../../images/icon3.png';
import Product1 from '../../images/product1.png';
import Product2 from '../../images/product2.png';
import Blog from "../blog";
import Contato from "../contato";
import './Home.css';

export default function Home(){
    return (
        <>
        <section className="home-section home-section-white">
            <div className="container text-center">
                <h1>A solução mais prática do mercado</h1>
                <p className="section-subtitle text-center">Melhore o desempenho dos ativos e otimize a operação com a plataforma de monitoramento online mais completa do mercado.</p>
                <div className="section-1">
                    <div className="section-1-item">
                        <img src={Icon1} alt="" />
                        <h4>1. PLUG AND PLAY</h4>
                        <p>Conecte o SENSOR TRACTION em suas máquinas e está pronto</p>
                    </div>
                    <div className="section-1-item">
                        <img src={Icon2} alt="" />
                        <h4>2. CONFIGURAÇÃO DE ATIVOS</h4>
                        <p>Configure todas as suas máquinas em nosso software</p>
                    </div>
                    <div className="section-1-item">
                        <img src={Icon3} alt="" />
                        <h4>3. MONITORAMENTO</h4>
                        <p>Monitore o desempenho e possíveis manutenções das máquinas</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="home-section home-section-white pb-0">
            <div className="product-1">
                <div className="container">
                    <div className="description-product">
                        <h1>Software de Manutenção<br />TracOS™</h1>
                        <p>Melhore o desempenho dos ativos e otimize a operação com a plataforma de monitoramento online mais completa do mercado.</p>
                        <a className="button--primary" href="#">Saiba mais</a>
                    </div>
                    <div className="product-image"><img src={Product1} alt="" /></div>
                </div>
            </div>
            <div className="product-2">
                <div className="container">
                    <div className="product-image"><img src={Product2} alt="" /></div>
                    <div className="description-product">
                        <h1>Monitoramento Online<br />Smart Trac</h1>
                        <p>Melhore o desempenho dos ativos e otimize a operação com a plataforma de monitoramento online mais completa do mercado.</p>
                        <a className="button--secondary" href="#">Saiba mais</a>
                    </div>
                </div>
            </div>              
        </section>
        
        
        <Blog />
        <section className="home-section home-section-gray">
            <div className="container text-center">
                <h1>Por que escolher a Tractian?</h1>
                <div className="section-1">
                    <div className="section-1-item">
                        <h1>90%</h1>
                        <p>DE ASSERTIVIDADE DOS INSIGHTS GERADOS PELA PLATAFORMA.</p>
                    </div>
                    <div className="section-1-item">
                        <h1>45%</h1>
                        <p>AUMENTO DE CONFIABILIDADE DAS MÁQUINAS COM SISTEMA TRACTIAN.</p>
                    </div>
                    <div className="section-1-item">
                        <h1>30%</h1>
                        <p>REDUÇÃO DAS OCORRÊNCIAS DE ÚLTIMA HORA NA MANUTENÇÃO.</p>
                    </div>
                </div>
            </div>
        </section>
        <Contato />
        </>
    );
}