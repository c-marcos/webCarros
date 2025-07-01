import logo from "../../../assets/imgs/logo.svg";
import { HeaderStyle, MenuLogin, Nav, Menu, CustonButton } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { FiUser, FiLogIn, FiLogOut, FiGrid } from "react-icons/fi";
import { useEffect, useState } from "react";



export const Header = () => {
  const [open, setOpen] = useState(false);
  const { isLogged, user } = useUser();
  const navigate = useNavigate();
  

  function handleClick() {
    if (isLogged){
      setOpen(!open)
    }else{
      navigate('/login', {replace:true})
    }
  }

  function handleLinkClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    navigate(`/${e.currentTarget.id}`)
    setOpen(false)
  }

  useEffect(()=>{
    const element = document.querySelector('main')
    const closeMenu = () => setOpen(false);
    element?.addEventListener('click', closeMenu)

    return () => element?.removeEventListener('click', closeMenu)
  },[])

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
              <CustonButton id="dashboard" onClick={handleLinkClick} >
                <FiGrid /> Dashboard
              </CustonButton>
            </li>
            <li>
              <CustonButton id="login" onClick={handleLinkClick}>
                <FiLogOut /> Sair
              </CustonButton>
            </li>
          </ul>
        </Menu>
      </MenuLogin>
    </HeaderStyle>
  );
};
