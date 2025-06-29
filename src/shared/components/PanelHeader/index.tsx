import { PanelStyle } from "./style";
import { Link } from "react-router-dom";

export const PanelHeader = () => {
  return (
    <PanelStyle>
      <Link to="#">Dashboard</Link>
      <Link to="/dashboard/new">Novo carro</Link>
    </PanelStyle>
  );
};
