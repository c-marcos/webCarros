import { useEffect, useState } from "react";
import { PanelStyle } from "./style";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"; 

export const PanelHeader = () => {
  const [actvate, setActive] = useState<'dashboard' | 'new' | undefined>(undefined);
  const location = useLocation();

  useEffect(()=>{
    if(location.pathname === '/dashboard'){
      setActive('dashboard')
    }else if(location.pathname === '/dashboard/new'){
      setActive('new')
    }else{
      setActive(undefined)
    }
  },[location])


  return (
    <PanelStyle>
      <Link 
        to="/dashboard" 
        style={{borderBottom: `2px solid ${actvate==='dashboard' ? '#FFF' : 'transparent'}`}}
      >Dashboard</Link>
      <Link 
        to="/dashboard/new"
        style={{borderBottom: `2px solid ${actvate==='new' ? '#FFF' : 'transparent'}`}}
      >Novo carro</Link>
    </PanelStyle>
  );
};
