import logo from "../../../assets/imgs/logo.svg";
import { HeaderStyle, MenuLogin, Nav, Menu } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { FiUser, FiLogIn, FiLogOut, FiGrid } from "react-icons/fi";
import { useState } from "react";

export const Header = () => {
  const { isLogged, user } = useUser();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  function handleClick() {
    if (isLogged){
      setOpen(!open);
    }else{
      navigate('/login', {replace:true})
    }
  }

  return (
    <HeaderStyle>
      <Link to="/">
        <img src={logo} alt="Logotipo WebCarros" />
      </Link>

      <MenuLogin>
        {isLogged &&
          <p>
            Bem vindo! <strong>{user.nome}</strong>
          </p>
        }
        <Nav>
          {!isLogged && (
            <button className="btn" onClick={handleClick}>
              <FiLogIn size={18} color="#7d7d7d" />
            </button>
          )}
          {isLogged && (
            <button className="btn" onClick={handleClick}>
              <FiUser size={18} color="#7d7d7d" />
            </button>
          )}
        </Nav>
        <Menu className={` menu ${open && "open"}`}>
          <ul>
            <li>
              <Link to="/dashboard">
                <FiGrid /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/login">
                <FiLogOut /> Sair
              </Link>
            </li>
          </ul>
        </Menu>
      </MenuLogin>
    </HeaderStyle>
  );
};
