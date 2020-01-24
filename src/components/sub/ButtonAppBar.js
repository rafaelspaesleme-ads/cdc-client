import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import FadeMenu from './FadeMenu.js';
import TestMenuIcon from './TestMenuIcon';
import './../../css/style.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function ButtonAppBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className={classes.root}>
      <AppBar  color="primary" position="static">
        <Toolbar>
          <TestMenuIcon valorMenuIcon={props.selectMenuIcon} classCustom={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
          <Link to="/inicio" className="color-text-white" >CDC Admin</Link>
          </Typography>
          <FadeMenu />
        </Toolbar>
      </AppBar>
      
    </div>
  );
}
