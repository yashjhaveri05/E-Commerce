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

const Cart = () => {
    const classes = useStyles();

    return (
        <div>
           <Grid container spacing={2} justify="flex-start" alignItems="flex-start">
                <Grid item xs={12} sm={12} md={9}>
                    <TableContainer component={Paper} className={classes.root}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                            <TableRow className={classes.header}>
                                <TableCell className={classes.text}>Item Id</TableCell>
                                <TableCell className={classes.text} align="right">Name</TableCell>
                                <TableCell className={classes.text} align="right">Quantity</TableCell>
                                <TableCell className={classes.text} align="right">Price</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow key="1">
                                <TableCell component="th" scope="row">1</TableCell>
                                <TableCell align="right">Suit</TableCell>
                                <TableCell align="right">1</TableCell>
                                <TableCell align="right">10000</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <Card className={classes.root1}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Order Summary
                            </Typography>
                            <Typography variant="h5" component="h2">
                                Suit x 1=   10000
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                Total = 10000
                            </Typography>
                        </CardContent>
                 </Card>
                </Grid>
            </Grid> 
        </div>
      ); 
}

export default Cart;