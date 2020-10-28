import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar,Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import { ItemContext } from './ItemContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: "black",
  },
  Link1: {
    color: "white",
    marginRight: "10px",
  },
  Link: {
    color: "white",
  },
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
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
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
      </AppBar>
    </div>
  );
}