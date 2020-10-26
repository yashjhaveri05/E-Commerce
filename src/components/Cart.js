import React, {useContext,useState} from 'react';
import { Grid,Card,CardContent,Typography,TextField,Button } from '@material-ui/core';
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
    const data = useContext(ItemContext);
    const [quantity,setQuantity] = useState(1);
    const [total,setTotal] = useState(0);
    console.log('data: ',data)
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
                                <TableCell className={classes.text} align="right">Price/Quantity</TableCell>
                                <TableCell className={classes.text} align="right"></TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    data[1][0].map(temp => {
                                        return <TableRow key={temp.pid}>
                                            <TableCell component="th" scope="row">{temp.pid}</TableCell>
                                            <TableCell align="right">{temp.name}</TableCell>
                                            <TableCell align="right">
                                                <TextField
                                                    id="standard-number"
                                                    label="Number"
                                                    type="number"
                                                    value={quantity}
                                                    onChange={(e)=>setQuantity(e.target.value)}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell align="right">{temp.amt}</TableCell>
                                            <TableCell align="right">
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                className={classes.button}
                                                /*onClick={(e) => data[1][0].filter((item) => item.id !== data[1][0].indexOf(e.target.value))}*/
                                            >
                                                Delete
                                            </Button>
                                            </TableCell>
                                        </TableRow>
                                    })
                                }
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
                            {data[1][0].map(temp => {
                                return <Typography variant="h5" component="h2">
                                    {temp.name} x {quantity}
                                </Typography>
                                    })
                            }
                            <Typography color="textSecondary" gutterBottom>
                                Total = {total}
                            </Typography>
                        </CardContent>
                 </Card>
                </Grid>
            </Grid> 
        </div>
      ); 
}
export default Cart;