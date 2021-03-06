import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import HelpIcon from '@material-ui/icons/Help';
import './../../css/style.css';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import MenuBookIcon from '@material-ui/icons/MenuBook';
import PersonIcon from '@material-ui/icons/Person';
import CategoryIcon from '@material-ui/icons/Category';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import FaceIcon from '@material-ui/icons/Face';
import SettingsIcon from '@material-ui/icons/Settings';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const listaProfile = [
    'Meu Perfil',
    'Configurações'
  ]

  const listaPrincipal = [
    'Livros', 
    'Autores', 
    'Categorias', 
    'Usuarios'
  ];

  const iconsProfile = [
    <FaceIcon/>,
    <SettingsIcon/>
  ]

  const iconsPrincipal = [
      <MenuBookIcon/>, 
      <PersonIcon/>, 
      <CategoryIcon/>, 
      <SupervisedUserCircleIcon/>
  ];

  const pathProfile = ["/perfil", "/config"]

  const pathPrincipal = ["/livros", "/autores", "/categorias", "/usuarios"]

  const subPaths = ["/ajuda", '/logout']

  const linkProfile = [
    <Link to={pathProfile[0]} className="color-text" >{listaProfile[0]}</Link>,
    <Link to={pathProfile[1]} className="color-text" >{listaProfile[1]}</Link>
  ]

  const linkPrincipal = [
    <Link to={pathPrincipal[0]} className="color-text" >{listaPrincipal[0]}</Link>,
    <Link to={pathPrincipal[1]} className="color-text" >{listaPrincipal[1]}</Link>,
    <Link to={pathPrincipal[2]} className="color-text" >{listaPrincipal[2]}</Link>,
    <Link to={pathPrincipal[3]} className="color-text" >{listaPrincipal[3]}</Link>
  ]

  const linkIconsProfile = [
    <Link to={pathProfile[0]} className="color-text" >{iconsProfile[0]}</Link>,
    <Link to={pathProfile[1]} className="color-text" >{iconsProfile[1]}</Link>
  ]

  const linkIconsPrincipal = [
      <Link to={pathPrincipal[0]} className="color-text" >{iconsPrincipal[0]}</Link>,
      <Link to={pathPrincipal[1]} className="color-text" >{iconsPrincipal[1]}</Link>,
      <Link to={pathPrincipal[2]} className="color-text" >{iconsPrincipal[2]}</Link>,
      <Link to={pathPrincipal[3]} className="color-text" >{iconsPrincipal[3]}</Link>
  ]


  const subLista = ['Ajuda', 'Sair'];

  const subIcons =[<HelpIcon/>, <PowerSettingsNewIcon/>]

  const subLinks = [
    <Link to={subPaths[0]} className="color-text" >{subLista[0]}</Link>,
    <Link to={subPaths[1]} className="color-text" >{subLista[1]}</Link>,
  ]

  const subIconLinks = [
    <Link to={subPaths[0]} className="color-text" >{subIcons[0]}</Link>,
    <Link to={subPaths[1]} className="color-text" >{subIcons[1]}</Link>,
  ]

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <Link to="/dashboard" className="color-text-white" >Dashboard </Link> - CDC Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {linkProfile.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{linkIconsProfile[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {linkPrincipal.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{linkIconsPrincipal[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {subLinks.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{subIconLinks[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}
