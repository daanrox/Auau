import React from "react";
import Cards from "../../Cards/Cards";
import Marcas from "../../Marcas/Marcas";
import Title from "../../Title";
import style from "./Home.module.css";
import Produtos from "../../Produtos/Produtos";
import ProdutoDestaque from "../../Produtos/ProdutoDestaque";
import banner from "../../Assets/frete.png";
const Home = () => {
  return (
    <div className={style.home}>
      <Title text="Categorias" />
      <p className={style.p}>
        Descubra tudo para seu pet! De rações a shampoos, nossa seleção cuidadosa garante praticidade e diversidade para atender às necessidades do seu fiel companheiro. Explore nossas categorias e encontre o melhor para seu pet, tudo em um único lugar.
      </p>
      <Cards />

      <Title text="As melhores marcas" />
      <div className={style.container_marcas}>
        <p className={style.p}>
        No Auau, selecionamos cuidadosamente marcas líderes como Royal Canin, PremieRpet, Whiskas e Benebone, oferecendo produtos de alta qualidade para atender às necessidades do seu pet. Priorizamos o bem-estar e a felicidade dos animais, garantindo opções confiáveis e dedicadas aos nossos clientes peludos.{" "}
        </p>
        <Marcas />
      </div>

      <Title text="Destaques da semana" />
      <div className={style.container_destaques}>
        <div>
          <ProdutoDestaque />
        </div>

        <div className={style.container_produtos}>
          <Produtos amount={5}/>
        </div>
      </div>
      <div style={{ margin: "20px auto", width: "75vw" }}>
        <img style={{ width: "100%", marginTop: "60px" }} src={banner} />
      </div>
    </div>
  );
};

export default Home;
