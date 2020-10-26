import React, { useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {Button, Typography} from '@material-ui/core/';
import {ItemContext} from './ItemContext';
const useStyles = makeStyles((theme) => ({
    links: {
        color: "red",
        hover: "red",
    },
    item: {
        margin: 10,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },
}));
const Item = ({ id, title, price, company, images, info, test }) => {
  const classes = useStyles();
  const data = useContext(ItemContext);
  return (
    <div className="main">
      <div className={classes.item}>
        <img src={images} alt={title} height="200px"/>
        <Link to={`/${id}`} className={classes.links}>
        <Typography variant="h4" component="h4">
          {title}
        </Typography>
        </Link>
        <Typography variant="h6" component="h6">
          ₹{price}
        </Typography>
        <Typography variant="h6" component="h6">
          {company}
        </Typography>
        <Button
         variant="outlined"
         color="primary"
         onClick={() => data[1][1]([...data[1][0],{pid:id,name:title,amt:price}])}
        >
          Add to Cart
        </Button>
        {data[2][0].length>=2 ? 
          <Button
          variant="outlined"
          disabled
          >
            Add to Compare
          </Button> : 
        <Button
         variant="outlined"
         color="primary"
         onClick={() => data[2][1]([...data[2][0],{id:id,title:title,price:price,company:company,info:info,images:images}])}
        >
          Add to Compare
        </Button>}
      </div>
    </div>
  );
};
export default Item;