import React, {useContext} from 'react';
import { Grid,ButtonBase } from '@material-ui/core';
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
        textAlign: "center",
    },
    align: {
        textAlign: "center",
    },
    image: {
        height: 200,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
      },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
  });

const Compare = () => {
    const classes = useStyles();
    const data = useContext(ItemContext);
    const temp1 = data[2][0][0]
    const temp2 = data[2][0][1]
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
                                    <TableCell component="th" scope="row" className={classes.align}>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} src={temp1.images} alt={temp1.title}/>
                                        </ButtonBase>
                                    </TableCell>
                                    <TableCell align="right" className={classes.align}>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} src={temp2.images} alt={temp2.title}/>
                                        </ButtonBase>
                                    </TableCell>
                                </TableRow>
                                <TableRow key="1">
                                    <TableCell component="th" scope="row" className={classes.align}>{temp1.title}</TableCell>
                                    <TableCell align="right" className={classes.align}>{temp2.title}</TableCell>
                                </TableRow>
                                <TableRow key="2">
                                    <TableCell component="th" scope="row" className={classes.align}>{temp1.company}</TableCell>
                                    <TableCell align="right" className={classes.align}>{temp2.company}</TableCell>
                                </TableRow>
                                <TableRow key="3">
                                    <TableCell component="th" scope="row" className={classes.align}>{temp1.price}</TableCell>
                                    <TableCell align="right" className={classes.align}>{temp2.price}</TableCell>
                                </TableRow>
                                <TableRow key="4">
                                    <TableCell component="th" scope="row" className={classes.align}>{temp1.info}</TableCell>
                                    <TableCell align="right" className={classes.align}>{temp2.info}</TableCell>
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