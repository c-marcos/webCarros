import logo from "../../../assets/imgs/logo.svg";
import { HeaderStyle, MenuLogin, Nav, Menu } from "./style";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { FiUser, FiLogIn, FiLogOut } from "react-icons/fi";
import { useState } from "react";

export const Header = () => {
  const { isLogged, user } = useUser();
  const [open, setOpen] = useState(false);

  function openMenu() {
    setOpen(!open);
  }

  return (
    <HeaderStyle>
      <Link to="/">
        <img src={logo} alt="Logotipo WebCarros" />
      </Link>

      <MenuLogin>
        {
          <p>
            Bem vindo! <strong>{user.nome}</strong>
          </p>
        }
        <Nav>
          {!isLogged && (
            <button className="btn" onClick={openMenu}>
              <FiLogIn size={18} color="#7d7d7d" />
            </button>
          )}
          {isLogged && (
            <button className="btn" onClick={openMenu}>
              <FiUser size={18} color="#7d7d7d" />
            </button>
          )}
        </Nav>
        <Menu className={` menu ${open && "open"}`}>
          <ul>
            <li>
              <Link to="/login">
                Sair <FiLogOut />
              </Link>
            </li>
            <li>
              <Link to="/login">
                Sair <FiLogOut />
              </Link>
            </li>
          </ul>
        </Menu>
      </MenuLogin>
    </HeaderStyle>
  );
};
