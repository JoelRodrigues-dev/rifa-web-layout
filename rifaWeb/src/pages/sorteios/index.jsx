import React from "react";
import "./style.css";
import rectangle from "../../assets/imgs/rectangle.png";
import iphoneDoze from "../../assets/imgs/iphoneDoze.png";
import kitGamer from "../../assets/imgs/kitGamer.png";

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
                <img src={rectangle} alt="iphone" />
              </div>
              <div className="item-draw-info">
                <div className="draw-info-title">
                  <h3>iPhone pro max</h3>
                  <h4>Data do sorteio</h4>
                </div>
                <div className="draw-info-date-process">
                  <p>Processo SUSEP: 00000000000/0000-00</p>
                  <p> 00/00/0000 - 00:00</p>
                </div>
                <p>Valor: R$0,00</p>
                <p>Data do sorteio: 00/00/0000</p>
                <div className="draw-quotas">
                  <div className="draw-quotas-block">+100</div>
                  <div className="draw-quotas-block">+600</div>
                  <div className="draw-quotas-block">+1000</div>
                  <div className="draw-quotas-block">+1500</div>
                </div>
                <div className="draw-total-price">
                  <p>Total: R$0,00</p>
                  <div className="draw-quotas-amount">
                    <button>+</button>
                    <p>30</p>
                    <button>+</button>
                  </div>
                </div>
                <div className="btn-purchase">
                  <button className="btn-purchase" type="button">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </section>
          <h3>Todos os sorterios</h3>
        </main>

        <div className="section-all-draws">
          <div className="all-draws-cards">
            <div className="draws-cards">
              <div>
                <img
                  className="all-draws-img"
                  src={iphoneDoze}
                  alt="cellphone"
                  s
                />
              </div>
              <div className="draw-card-title">
                <h3>iPhone Pro Max</h3>
                <p>process SUSEP:000000000000/0000-00</p>
              </div>
              <div className="draw-card-subtitle">
                <h4>VALOR:</h4>
                <h4>Data do sorteio:</h4>
              </div>
              <div className="draw-card-info">
                <h4>R$0,00</h4>
                <p>00/00/0000</p>
              </div>
              <div className="btn-purchase-small">
                <button className="btn-purchase-small" type="button">
                  Comprar
                </button>
              </div>
            </div>
            <div className="draws-cards">
              <img
                className="all-draws-img"
                src={iphoneDoze}
                alt="cellphone"
                s
              />
              <div className="draw-card-title">
                <h3>iPhone Pro Max</h3>
                <p>process SUSEP:000000000000/0000-00</p>
              </div>

              <div className="draw-card-subtitle">
                <h4>VALOR:</h4>
                <h4>Data do sorteio:</h4>
              </div>
              <div className="draw-card-info">
                <h4>R$0,00</h4>
                <p>00/00/0000</p>
              </div>
              <div className="btn-purchase-small">
                <button className="btn-purchase-small" type="button">
                  Comprar
                </button>
              </div>
            </div>
            <div className="draws-cards">
              <img
                className="all-draws-img"
                src={iphoneDoze}
                alt="cellphone"
                s
              />
              <div className="draw-card-title">
                <h3>iPhone Pro Max</h3>
                <p>process SUSEP:000000000000/0000-00</p>
              </div>
              <div className="draw-card-subtitle">
                <h4>VALOR:</h4>
                <h4>Data do sorteio:</h4>
              </div>
              <div className="draw-card-info">
                <h4>R$0,00</h4>
                <p>00/00/0000</p>
              </div>
              <div className="btn-purchase-small  ">
                <button className="btn-purchase-small" type="button">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="last-draw-container">
          <h3>Últimos resultados</h3>
          <div className="last-results-container">
            <div className="last-results-cards">
              <img className="last-draw-img" src={kitGamer} alt="kitGamer" s />
              <h3>Kit Streamer 50K</h3>
              <div className="btn-purchase-small  ">
                <button className="btn-purchase-small" type="button">
                  Comprar
                </button>
              </div>
            </div>
            <div className="last-results-cards">
              <img className="last-draw-img" src={kitGamer} alt="kitGamer" s />
              <h3>Kit Streamer 50K</h3>
              <div className="btn-purchase-small  ">
                <button className="btn-purchase-small" type="button">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer></footer>
      </div>
    </div>
  );
}

export default Home;
