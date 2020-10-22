import React, {useState} from 'react';
import {Grid,Card} from '@material-ui/core/';
import {Button,TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "../index.css";

const useStyles = makeStyles((theme) => ({
    form: {
        marginTop: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        marginLeft: 10,
        marginRight: 10,
    },
    btn: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: "#ddfbd2",
        color: "black",
    },
    card: {
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#6b7fd7",
        border: "6px solid black"
    },
    input: {
        backgroundColor: "#ddfbd2",
        color: "black",
    },
    label: {
        fontSize: "1.3rem",
        marginTop: 10,
    },
  }));

const Login = () => {
    const classes = useStyles();

    let [username,setUsername]=useState('');
    let [pwd,setPwd]=useState('');

    const submitHandler = () => {
        const logged = true;
        localStorage.setItem('logged', logged);
        localStorage.setItem('user', username);
      };

    return (
        <div>
            <Grid item xs={12} sm={12} md={6}></Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Card className={classes.card}>
                    <h1><u>Login</u></h1>  
                    <form onSubmit={submitHandler} className={classes.form} >
                        <label className={classes.label}>Enter Username:</label>
                        <TextField id="outlined-basic" defaultValue={username} onChange={e => setUsername(e.target.value)} variant="outlined" className={classes.input} />
                        <label className={classes.label}>Enter Password:</label>
                        <TextField id="outlined-basic" defaultValue={pwd} onChange={e => setPwd(e.target.value)} type="password" variant="outlined" className={classes.input} />
                        <Button variant="contained" color="secondary" type='submit' className={classes.btn} >Submit</Button>
                    </form>
                </Card>
            </Grid>
        </div>
    );
}

export default Login;