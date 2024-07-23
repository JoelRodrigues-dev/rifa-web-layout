import React, { useState } from "react";
import "./style.css";
import rectangle from "../../assets/imgs/rectangle.png";
import iphoneDoze from "../../assets/imgs/iphoneDoze.png";
import kitGamer from "../../assets/imgs/kitGamer.png";
import Header from "../../assets/components/header/Header";
import LoginModal from "../../assets/components/loginUser/LoginUser";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [quotas, setQuotas] = useState(0); // Inicializa com 30 cotas
  const [total, setTotal] = useState(0);

  // Valores fixos de cotas
  const quotasValues = [100, 600, 1000, 1500];

  // Atualiza o total baseado no número de cotas
  const updateTotal = (newQuotas) => {
    const pricePerQuota = 0.08; // Defina o preço por cota
    setTotal(newQuotas * pricePerQuota);
  };

  const handleIncrement = () => {
    const newQuotas = quotas + 1;
    setQuotas(newQuotas);
    updateTotal(newQuotas);
  };

  const handleDecrement = () => {
    const newQuotas = quotas > 0 ? quotas - 1 : 0;
    setQuotas(newQuotas);
    updateTotal(newQuotas);
  };

  const handleAddQuotas = (value) => {
    const newQuotas = quotas + value;
    setQuotas(newQuotas);
    updateTotal(newQuotas);
  };

  const handleInputChange = (event) => {
    const newQuotas = parseInt(event.target.value, 10);
    if (!isNaN(newQuotas) && newQuotas >= 0) {
      setQuotas(newQuotas);
      updateTotal(newQuotas);
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <div>
        <Header onButtonClick={handleOpenModal} />
        {showModal && (
          <LoginModal showModal={showModal} onClose={handleCloseModal} />
        )}
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
                  {quotasValues.map((value, index) => (
                    <div
                      key={index}
                      className="draw-quotas-block"
                      onClick={() => handleAddQuotas(value)}
                    >
                      +{value}
                    </div>
                  ))}
                </div>
                <div className="draw-total-price">
                  <p>Total: R${total.toFixed(2)}</p>
                  <div className="draw-quotas-amount">
                    <button onClick={handleDecrement}>-</button>
                    <input
                      type="number"
                      value={quotas}
                      onChange={handleInputChange}
                      min="0"
                    />
                    <button onClick={handleIncrement}>+</button>
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
