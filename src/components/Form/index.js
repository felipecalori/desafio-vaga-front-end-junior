import { useState } from "react";
import "./styles.css";
import api from "../../services/api";

function Form({ simulate, setSimulate }) {
  const [amount, setAmount] = useState(1000);
  const [installments, setInstallments] = useState(1);
  const [mdr, setMdr] = useState(0);

  const simulatedData = (data) => {
    console.log(data);
    api
      .post("", data)
      .then((resp) => {
        setSimulate(resp.data);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(simulate);
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h1>Simule sua Antecipação</h1>
      <div className="form">
        <label>Informe o valor da venda *</label>
        <input
          className="inputValue"
          type="number"
          min={1000}
          value={amount}
          required
          onChange={(event) => setAmount(parseInt(event.target.value))}
        ></input>
      </div>
      <div className="form">
        <label>Em quantas parcelas *</label>
        <input
          className="inputValue"
          type="number"
          min={0}
          max={12}
          required
          value={installments}
          onChange={(event) => setInstallments(parseInt(event.target.value))}
        ></input>
        <span className="maxvalue">Maximo de 12 parcelas</span>
      </div>
      <div className="form">
        <label>Informe o percentual de MDR *</label>
        <input
          className="inputValue"
          type="number"
          value={mdr}
          required
          onChange={(event) => setMdr(parseInt(event.target.value))}
        ></input>
        <button
          onClick={() =>
            simulatedData({
              amount: amount,
              installments: installments,
              mdr: mdr,
            })
          }
        >
          Simular
        </button>
      </div>
    </form>
  );
}
export default Form;
