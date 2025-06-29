import { ActionsStyle, Containt, HomeStyle } from "./style";
import { Input } from "../../shared/components/Input";
import { Button } from "../../shared/components/Button";
import { Card } from "../../shared/components/Card";
import { useEffect, useState } from "react";
import { useUser } from "../../shared/hooks/useUser";

export const Home = () => {
  const [value, setValue] = useState("");
  const { isLogged } = useUser();

  useEffect(() => {
    // console.log("Home");
    // console.log(isLogged);
  }, [isLogged]);

  return (
    <HomeStyle>
      <ActionsStyle>
        <Input
          error="Por favor digite o nome do carro para prossegui..."
          value={value}
          name="search"
          type="default"
          placeholder="Digite o nome do carro..."
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <Button w="234px" isValid={value !== ""}>
          Buscar
        </Button>
      </ActionsStyle>
      <h1 className="descricao">Carros novos e usados em todo o Brasil</h1>
      <Containt>
        <Card />
      </Containt>
    </HomeStyle>
  );
};
