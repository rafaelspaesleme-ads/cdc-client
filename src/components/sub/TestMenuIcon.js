import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

export default function TestMenuIcon(props) {
    const valor = props.valorMenuIcon;
    if (valor == "true") {
      return (
          <IconButton edge="start" className={props.classCustom} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
      );
    }
    return null;
  }