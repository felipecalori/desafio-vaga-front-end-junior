import "./styles.css";

function Results({ simulate }) {
  return (
    <section className="results">
      <h2>VOCÊ RECEBERÁ:</h2>
      <span className="line"></span>
      <p>
        Amanhã: <span>R$ {simulate[1] || 0}</span>
      </p>
      <p>
        Em 15 dias: <span>R$ {simulate[15] || 0}</span>
      </p>
      <p>
        Em 30 dias: <span>R$ {simulate[30] || 0}</span>
      </p>
      <p>
        Em 90 dias: <span>R$ {simulate[90] || 0}</span>
      </p>
    </section>
  );
}

export default Results;
