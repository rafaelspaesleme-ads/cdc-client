import React from 'react';
import './../../css/pure-min.css';
import './../../css/side-menu.css';
import './../../css/style.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const accessLogin = () => {
    setAnchorEl("teste");
  } 

  return (
    <div>
      <Button color="inherit" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        Opções
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem ><Link to="/login" className="color-text" >Login</Link></MenuItem>
        <MenuItem ><Link to="/novo_usuario" className="color-text" >Cadastre-se</Link></MenuItem>
        <MenuItem ><Link to="/esqueci_senha" className="color-text" >Esqueci acesso</Link></MenuItem>
        <MenuItem ><Link to="/ajuda" className="color-text" >Ajuda</Link></MenuItem>
      </Menu>
    </div>
  );
}
