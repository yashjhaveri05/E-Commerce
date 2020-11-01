import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar,Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import { ItemContext } from './ItemContext';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "../index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: "10px",
  },
  appBar1: {
    top: 'auto',
    bottom: 0,
    backgroundColor: "black",
    marginBottom: "10px",
  },
  Link1: {
    color: "white",
    marginRight: "10px",
  },
  Link: {
    color: "white",
  },
  Link2: {
    color: "black",
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const data = useContext(ItemContext);
  const logoutHandler = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('logged');
    window.location.reload();
  };
  const badge1 = data[1][0].length;
  const badge2 = data[2][0].length;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutSmall = () => {
    handleClose();
    logoutHandler();
  }

  return (
    <div className={classes.root} id="Navbar">
      {window.innerWidth>600 ? 
        <AppBar position="static" className={classes.appBar1} id="Appbar1">
          <Toolbar>
            <Typography variant="h4" className={classes.title}><Link to="/" className={classes.Link}>E-Commerce</Link></Typography>
            {
              localStorage.getItem('logged') ? 
              <div>
                  <Button><Link to="/cart" className={classes.Link1}>Cart
                  </Link><Badge badgeContent={badge1} color="secondary"></Badge></Button>
                  <Button><Link to="/compare" className={classes.Link1}>Compare</Link><Badge badgeContent={badge2} color="secondary"></Badge></Button>
                  <Button onClick={logoutHandler}><Link to="/login" className={classes.Link}>Logout</Link></Button>
              </div> : <Button><Link to="/login" className={classes.Link}>Login</Link></Button>
            }
          </Toolbar>
          </AppBar> : 
          <AppBar position="static" className={classes.appBar} id="Appbar">
            <Toolbar className="mobile-bar">
            <Button color="primary" variant="contained" size="large" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.title1}>E-Commerce</Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {
                localStorage.getItem('logged') ? 
                <div>
                    <MenuItem onClick={handleClose}><Link to="/" className={classes.Link2}>Home</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/cart" className={classes.Link2}>Cart</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/compare" className={classes.Link2}>Compare</Link></MenuItem>
                    <MenuItem onClick={logoutSmall}><Link to="/login" className={classes.Link2}>Logout</Link></MenuItem>
                </div> : 
                <div>
                    <MenuItem onClick={handleClose}><Link to="/" className={classes.Link2}>Home</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/login" className={classes.Link2}>Login</Link></MenuItem>
                </div>
                }
                
              </Menu>
            </Toolbar>
        </AppBar>
      }
    </div>
  );
}