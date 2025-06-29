import logo from "../../../assets/imgs/logo.svg";
import { HeaderStyle } from "./style";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { FiUser, FiLogIn, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { isLogged, user, handleLogout } = useUser();
  const navigate = useNavigate();

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = e.target as HTMLElement;
    if (target.id) {
      if (target.id === "none") {
        navigate("/dashboard", { replace: false });
      } else {
        navigate("/", { replace: false });
        handleLogout();
      }
    }
  }

  return (
    <HeaderStyle>
      <Link to="/">
        <img src={logo} alt="Logotipo WebCarros" />
      </Link>
      <div className="loginLoguot">
        {isLogged && (
          <p>
            Bem vindo! <strong>{user.nome}</strong>...
          </p>
        )}
        <div className="login" onClick={handleClick}>
          <Link id="login" to={`${isLogged ? "/dashboard" : "/login"}`}>
            {!isLogged ? (
              <FiLogIn size={20} color="#7d7d7d" />
            ) : (
              <FiUser size={20} color="#7d7d7d" />
            )}
          </Link>
          {isLogged && (
            <button id="none" className="none">
              <div id="menu" className="menu">
                Sair <FiLogOut />
              </div>
            </button>
          )}
        </div>
      </div>
    </HeaderStyle>
  );
};
