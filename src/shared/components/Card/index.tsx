import { Container, Descriptions, ImgBox } from "./style";

export const Card = () => {
  return (
    <Container>
      <ImgBox>
        <img
          src="https://nxboats.com.br/wp-content/uploads/2023/11/marcas-de-carros-de-luxo-lamborghini.jpg"
          alt="Carro Esportivo"
        />
      </ImgBox>
      <Descriptions>
        <h4>JAGUAR-PACE</h4>
        <div className="info">
          2016/2017 <div></div> 26999 km
        </div>
        <p className="pricer">R$ 239.000</p>
      </Descriptions>
      <p className="local">São Paulo - SP</p>
    </Container>
  );
};
