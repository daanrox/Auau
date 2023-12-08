import React from "react";
import Title from "../../Title";
import style from "./Sobre.module.css";

const Sobre = () => {
  return (
    <div className={style.sobre_container}>
      <Title text="Quem Somos?" />
      <p className={style.quem_somos}>
        Aqui no Auau, acreditamos que cada patinha tem uma história única, 
        repleta de alegria e bem-estar. Oferecemos uma variedade de espaços, 
        produtos e serviços projetados para fortalecer o vínculo especial entre pets 
        e suas famílias. Essa é a essência do que fazemos.
        <p>
          Nossa paixão por pets não é apenas parte da nossa missão, 
          é vivenciada diariamente em nossas ações, nas lojas e em cada interação com nossos clientes.
        </p>
        <p>
          Trabalhamos incansavelmente para garantir que você e seus pets desfrutem 
          da melhor experiência conosco, seja através de nossos serviços de estética e 
          veterinária ou da diversidade de produtos que oferecemos para cães, gatos, peixes, 
          aves, roedores e répteis. 
          Mantemos nossos ouvidos atentos para trazer as novidades do mundo pet até você.

        </p>
        <p>
        qui, a conveniência é nossa prioridade! Organizamos tudo para 
        que você encontre facilmente o que procura, a qualquer hora e no lugar que preferir.
        </p>
        <p>
        Sabemos que cuidar dos nossos bichinhos é um prazer: selecionar a melhor ração, buscar mimos novos, proporcionar um banho revigorante. O que nos move é ver a felicidade deles.
        </p>
        <p>
        Compreendemos que seu tempo é valioso, e por isso nos esforçamos para que cada momento conosco seja aproveitado ao máximo! Tratamos cada pet com dedicação e respeito, trabalhando constantemente para que nossas lojas, produtos e serviços estejam à altura do amor e cuidado que eles merecem.
        </p>
        <p>
        Convidamos você a explorar nossas lojas, a trocar ideias, histórias e sorrisos. É isso que fazemos, e é assim que amamos cuidar dos nossos pets.
        </p>
        <p className={style.somos}>
          Somos o <span>AUAU</span>, seu pet center de estimação!
        </p>
        
      </p>
    </div>
  );
};

export default Sobre;
