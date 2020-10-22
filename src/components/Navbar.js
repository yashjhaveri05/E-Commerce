import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar,Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: "rgb(107, 127, 215)",
  },
  Link: {
    color: "black",
  }
}));

export default function Navbar() {
  const classes = useStyles();

  const logoutHandler = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('logged');
    window.location.reload();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}><Link to="/" className={classes.Link}>E-Commerce</Link></Typography>
          {
            localStorage.getItem('logged') ? 
            <div>
                <Button>Cart</Button>
                <Button onClick={logoutHandler}><Link to="/login" className={classes.Link}>Logout</Link></Button>
            </div> : <Button><Link to="/login" className={classes.Link}>Login</Link></Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}