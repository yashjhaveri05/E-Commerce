import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import { ItemContext } from './ItemContext';
import {Grid,Card,ButtonBase,Typography,CardContent} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import "../index.css";

const useStyles = makeStyles((theme) => ({
      card: {
          margin: "auto",
          maxWidth: "fit-content",
      },
      image: {
          height: 500,
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
      layout: {
          marginTop: 57,
          marginBottom: 59,
          marginLeft : 20,
          marginRight : 20,
      },
      content : {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
      },
  }));

export default function Detail() {
    const classes = useStyles();

    const { id } = useParams();
    const [product] = useContext(ItemContext);
    const item = product[0][id-1]
    return (
        <div className="ProductDetail">
            <Card className={classes.card}>
                <br />
                <br />
                {console.log(item)}
                <Grid container spacing={2}>
                        <Grid item className={classes.layout}>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} src={item.images} alt={item.title}/>
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={0} className={classes.content}>
                                    <CardContent>
                                        <Typography variant="h2" className="title">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="h4" gutterBottom className="Date">
                                            ₹{item.price}
                                        </Typography>
                                        <Typography variant="h5" gutterBottom>
                                            {item.company}
                                        </Typography>
                                        <Typography variant="h5" gutterBottom>
                                            {item.info}
                                        </Typography>
                                    </CardContent>
                            </Grid>
                        </Grid>
                    </Grid>
                    <br />
                    <br />
                </Card>
        </div>
    )
}