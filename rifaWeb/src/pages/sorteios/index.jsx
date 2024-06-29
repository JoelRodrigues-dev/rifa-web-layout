import React from "react";
import "./style.css";
import iphone from "../../assets/imgs/iphone.png";

function Home() {
  return (
    <div className="container">
      <div>
        <header>
          <div className="header-title">
            <h1>Hello World!</h1>
          </div>
          <nav className="links-header">
            <a href="">Sorteios</a>
            <a href="">Sorteios ao vivo</a>
            <a href="">Sobre nós</a>
            <a href="">Resultados</a>
          </nav>
          <div>
            <button type="button" className="btn-ticket">
              Meus Titulos
            </button>
          </div>
        </header>
        <main>
          <section className="feature-draws">
            <h2>Sorteios em destaques</h2>
            <div className="item-draw">
              <div className="item-draw-img">
                <img src={iphone} alt="iphone" />
              </div>
              <div className="item-draw-info">
                <h3>iPhone pro max</h3>
                <p>Valor: R$0,00</p>
                <p>Data do sorteio: 00/00/0000</p>

                <div className="btn-purchase">
                  <button className="btn-purchase" type="button">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
            <h3>Todos os sorterios</h3>
            <div className="section-all-draws">
              <div className="all-draws-cards">
                <div className="draws-cards"></div>
                <div className="draws-cards"></div>
                <div className="draws-cards"></div>
              </div>
            </div>
          </section>
        </main>
        <div className="test">
          <div className="test-um">
            <h3>Últimos resultados</h3>
            <div className="last-results-container">
              <div className="last-results-cards"></div>
              <div className="last-results-cards"></div>
            </div>
            <footer></footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
