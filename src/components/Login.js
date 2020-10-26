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
    },
    card: {
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "white",
        border: "6px solid black"
    },
    input: {
        color: "white",
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
        <Grid container spacing={2} justify="flex-start" alignItems="flex-start">
            <Grid item xs={0} sm={0} md={4}></Grid>
            <Grid item xs={12} sm={12} md={4}>
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
            </Grid>
        </div>
    );
}

export default Login;