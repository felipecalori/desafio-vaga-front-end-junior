import "./App.css";

function App() {
  return (
    <main>
      <div className="main-section">
        <section className="inputvalues">
          <h1>Simule sua Antecipação</h1>
          <div className="form">
            <label>Informe o valor da venda *</label>
            <input className="inputValue" type="number"></input>
          </div>
          <div className="form">
            <label>Em quantas parcelas *</label>
            <input className="inputValue" type="number"></input>
            <span className="maxvalue">Maximo de 12 parcelas</span>
          </div>
          <div className="form">
            <label>Informe o percentual de MDR *</label>
            <input className="inputValue" type="number"></input>
          </div>
        </section>
        <section className="results">
          <h2>VOCÊ RECEBERÁ:</h2>
          <span className="line"></span>
          <p>
            Amanhã: <span>R$ 0,00</span>
          </p>
          <p>
            Em 15 dias: <span>R$ 0,00</span>
          </p>
          <p>
            Em 30 dias: <span>R$ 0,00</span>
          </p>
          <p>
            Em 90 dias: <span>R$ 0,00</span>
          </p>
        </section>
      </div>
    </main>
  );
}

export default App;
