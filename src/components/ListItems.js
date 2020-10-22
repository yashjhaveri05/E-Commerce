import React, {useState, useContext} from 'react';
import {Grid,Card} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import "../index.css";
import Item from './Item';
import { ItemContext } from './ItemContext';

const useStyles = makeStyles((theme) => ({
    app: {
      background: "#b2b2b2",
    },
    grid: {
      marginLeft: 50,
      marginRight: 50,
      marginTop: 30, 
    },
  }));

const ListItems = () => {
    const classes = useStyles();
    const [items,setItems] = useContext(ItemContext);
    return (
        <div className={classes.app}>
          <div className={classes.grid}>
            <Grid container spacing={2} justify="flex-start" alignItems="flex-start">
              {items.map(item => (
                  <Grid item xs={12} sm={12} md={3}  key={item.id}>
                    <Card className="Items">
                      <Item
                          key={item.id}
                          id={item.id}
                          title={item.title}
                          price={item.price}
                          company={item.company}
                          info={item.info}
                          image={item.images}
                      /> 
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </div>
        </div>
      ); 
}

export default ListItems;