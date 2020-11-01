import React, {useContext} from 'react';
import { Grid,Button,ButtonBase } from '@material-ui/core';
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
    return (
        <div>
            {data[2][0].length !== 0 ?
            <Grid container spacing={2} justify="flex-start" alignItems="flex-start">
                <Grid item xs={1} sm={1} md={1}></Grid>
                <Grid item xs={10} sm={10} md={10}>
                    <TableContainer component={Paper} className={classes.root}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow className={classes.header}>
                                    <TableCell className={classes.text}></TableCell>
                                    {data[2][0].map(temp => {
                                    return <TableCell className={classes.text} key={temp.id}>{temp.title}</TableCell>
                                    })}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Image</TableCell>
                                    {data[2][0].map(temp => {
                                    return <TableCell key={temp.id} className={classes.align}>
                                                <ButtonBase className={classes.image}>
                                                    <img className={classes.img} src={temp.images} alt={temp.title}/>
                                                </ButtonBase>
                                            </TableCell>
                                    })}
                                </TableRow>
                                <TableRow>
                                    <TableCell>Price</TableCell>
                                    {data[2][0].map(temp => {
                                    return <TableCell className={classes.align} key={temp.id}>₹{temp.price}</TableCell>
                                    })}
                                </TableRow>
                                <TableRow>
                                    <TableCell>Company</TableCell>
                                    {data[2][0].map(temp => {
                                    return <TableCell className={classes.align} key={temp.id}>{temp.company}</TableCell>
                                    })}
                                </TableRow>
                                <TableRow>
                                    <TableCell>Description</TableCell>
                                    {data[2][0].map(temp => {
                                    return <TableCell className={classes.align} key={temp.id}>{temp.info}</TableCell>
                                    })}
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                    {data[2][0].map(temp => {
                                    return <TableCell key={temp.id} className={classes.align}>
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    className={classes.button}
                                                    onClick={() => {
                                                        data[2][1](compare_items => compare_items.filter(item => item.id!==temp.id))
                                                        data[0][1](items => items.map(item => item.id===temp.id?{...item,compare_flag:!item.compare_flag}:item));
                                                    }}
                                                >
                                                    Remove
                                                </Button>
                                            </TableCell>
                                    })}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={1} sm={1} md={1}></Grid>
            </Grid> : 
            <h4 className={classes.align}>Please Select Items To Compare</h4>
            }
        </div>
      ); 
}

export default Compare;