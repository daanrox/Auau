import React from "react";
import Button from "../Button/Button";

const Infos = () => {
  return (
    <div>
      <h1>
        Tudo o que seu pet precisa o <span style={{color: 'var(--primary-color)'}}>AUAU</span>{" "}
        tem!
      </h1>
      <h2>
      Seja para mimos deliciosos ou um visual único... é só escolher o que seu pet ama, como pagar e pronto! Aqui, a diversidade é constante.
      </h2>
      <Button text='Saiba Mais' />
    </div>
  );
};

export default Infos;
