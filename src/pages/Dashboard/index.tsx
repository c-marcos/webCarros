import { useEffect } from "react";
import { useUser } from "../../shared/hooks/useUser";
import { Containt, DashboardStyle, Main } from "./style";
import { Card } from "../../shared/components/Card";
import { PanelHeader } from "../../shared/components/PanelHeader";
import { Footer } from "../../shared/components/Footer";

export const Dashboard = () => {
  const { isLogged } = useUser();

  useEffect(() => {
    // console.log("Home");
    // console.log(isLogged);
  }, [isLogged]);

  return (
    <DashboardStyle>
      <PanelHeader />
      <Main>
        <Containt>
          <Card />
        </Containt>
      </Main>
      <Footer />
    </DashboardStyle>
  );
};
