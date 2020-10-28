import React, {useContext} from 'react';
import { Grid } from '@material-ui/core';
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
        marginTop: 20,
    },
    table: {
      minWidth: 650,
    },
    header: {
        backgroundColor: "black",
    },
    text: {
        color: "white",
        textAlign: "center",
    },
    align: {
        textAlign: "center",
    },
  });

const Compare = () => {
    const classes = useStyles();
    const data = useContext(ItemContext);
    return (
        <div>
            {data[2][0].length !== 0 ?
            <Grid container spacing={2} justify="flex-start" alignItems="flex-start">
                <Grid item xs={12} sm={12} md={12}>
                    <TableContainer component={Paper} className={classes.root}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow className={classes.header}>
                                    <TableCell className={classes.text}>Title</TableCell>
                                    <TableCell className={classes.text}>Price</TableCell>
                                    <TableCell className={classes.text}>Selling Partner</TableCell>
                                    <TableCell className={classes.text}>Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    data[2][0].filter(compareItem => compareItem.compare_flag === true).map(temp => {
                                        return <TableRow key={temp.pid}>
                                            <TableCell component="th" scope="row">{temp.title}</TableCell>
                                            <TableCell align="center">{temp.price}</TableCell>
                                            <TableCell align="center">{temp.company}</TableCell>
                                            <TableCell align="center">{temp.info}</TableCell>
                                        </TableRow>
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid> :
            <h4 align="center">Please Select Items To Compare</h4>
            }
        </div>
      ); 
}

export default Compare;