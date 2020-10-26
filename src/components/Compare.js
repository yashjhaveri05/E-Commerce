import React, {useContext} from 'react';
import { Grid,Card,CardContent,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "../index.css";
import { ItemContext } from './ItemContext';

const useStyles = makeStyles({
    root: {
        marginLeft: 20,
        marginTop: 20,
    },
    root1: {
        marginLeft: 20,
        marginTop: 20,
        marginRight: 20,
    },
    table: {
      minWidth: 650,
    },
    header: {
        backgroundColor: "black",
    },
    text: {
        color: "white",
    }
  });

const Compare = () => {
    const classes = useStyles();

    return (
        <div>
           <Grid container spacing={2} justify="flex-start" alignItems="flex-start">
                <Grid item xs={0} sm={0} md={3}></Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <TableContainer component={Paper} className={classes.root}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                            <TableRow className={classes.header}>
                                <TableCell className={classes.text}>Item 1</TableCell>
                                <TableCell className={classes.text} align="right">Item 2</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow key="1">
                                    <TableCell component="th" scope="row">Suit</TableCell>
                                    <TableCell align="right">Iphone</TableCell>
                                </TableRow>
                                <TableRow key="2">
                                    <TableCell component="th" scope="row">Raymond</TableCell>
                                    <TableCell align="right">Apple</TableCell>
                                </TableRow>
                                <TableRow key="3">
                                    <TableCell component="th" scope="row">10000</TableCell>
                                    <TableCell align="right">35000</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid> 
        </div>
      ); 
}

export default Compare;