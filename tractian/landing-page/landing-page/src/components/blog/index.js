import React from "react";
import BannerImage1 from '../../images/blog1.jpg';
import BannerImage2 from '../../images/blog2.png';
import BannerImage3 from '../../images/blog3.jpg';
import BannerImage4 from '../../images/blog4.jpg';
import './Blog.css';

export default function Blog(){
    return (
        <section className="blog-section">
            <div className="container container-blog">
                <div className="blog-infos">
                    <a href="https://tractian.com/blog/nao-automatize-o-caos" target="_blank" className="blog-image"><div className="blog-image-bg" style={{ backgroundImage: `url(${BannerImage1})` }}></div></a>
                    <div className="blog-date">22/03/2022</div>
                    <a href="https://tractian.com/blog/nao-automatize-o-caos" target="_blank" className="blog-title">Pensamento lean na indústria 4.0, não automatize o caos</a>
                    <div className="blog-description">Uma vez que a eficácia na integração entre processos e informações, tem como premissa, a eliminação dos desperdícios...</div>
                </div>
                <div className="blog-infos">
                    <a href="https://tractian.com/blog/iot-na-industria-4-0-quais-os-primeiros-passos" target="_blank" className="blog-image"><div className="blog-image-bg" style={{ backgroundImage: `url(${BannerImage2})` }}></div></a>
                    <div className="blog-date">22/03/2022</div>
                    <a href="https://tractian.com/blog/iot-na-industria-4-0-quais-os-primeiros-passos" target="_blank" className="blog-title">IoT na indústria 4.0, quais os primeiros passos</a>
                    <div className="blog-description">Além de conseguirem trocar informações e dados, todos os ativos que são conectados por meio da internet são capazes de obedecer comandos e executar tarefas ... </div>
                </div>
                <div className="blog-infos">
                    <a href="https://tractian.com/blog/inteligencia-artificial-em-2020-quais-as-prioridades-para-a-industria" target="_blank" className="blog-image"><div className="blog-image-bg" style={{ backgroundImage: `url(${BannerImage3})` }}></div></a>
                    <div className="blog-date">22/03/2022</div>
                    <a href="https://tractian.com/blog/inteligencia-artificial-em-2020-quais-as-prioridades-para-a-industria" target="_blank" className="blog-title">Inteligência artificial em 2020: quais as prioridades para a indústria</a>
                    <div className="blog-description">As apostas são altas em nosso mundo em rápida mudança. A pressão na indústria se torna cada vez mais intensa com as exigências da revolução 4.0.</div>
                </div>
                <div className="blog-infos">
                    <a href="https://tractian.com/blog/o-impacto-da-inteligencia-artificial-na-industria-brasileira" target="_blank" className="blog-image"><div className="blog-image-bg" style={{ backgroundImage: `url(${BannerImage4})` }}></div></a>
                    <div className="blog-date">22/03/2022</div>
                    <a href="https://tractian.com/blog/o-impacto-da-inteligencia-artificial-na-industria-brasileira" target="_blank" className="blog-title">O impacto da inteligência artificial na indústria brasileira</a>
                    <div className="blog-description">A inteligência artificial (IA) não é mais uma tecnologia do futuro. Os softwares e mecanismos inteligentes já ofereceram nos últimos anos um tremendo potencial para indústria. </div>
                </div>
            </div>
        </section>
    );
}