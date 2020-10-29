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
const Item = ({ id, title, price, company, images, info, cart_flag, compare_flag }) => {
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
        {
          !cart_flag && <Button
         variant="outlined"
         color="primary"
         onClick={() => {
            data[1][1]([...data[1][0],{pid:id,name:title,amt:price,qty:1}])
            data[0][1](items => items.map(item => item.id===id?{...item,cart_flag:!item.cart_flag}:item));
          }
        }
        >
          Add to Cart
        </Button>
        }
        {
          cart_flag && <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            data[1][1](cart_items => cart_items.filter(item => item.pid!==id));
            data[0][1](items => items.map(item => item.id===id?{...item,cart_flag:!item.cart_flag}:item));
          }}
        >
          Remove from Cart
        </Button>
        }
        {
          !compare_flag && <Button
         variant="outlined"
         color="primary"
         onClick={() => {
            data[2][1]([...data[2][0],{id:id,title:title,price:price,company:company,info:info,images:images}])
            data[0][1](items => items.map(item => item.id===id?{...item,compare_flag:!item.compare_flag}:item));
          }
        }
        >
          Compare
        </Button>
        }
        {
          compare_flag && <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            data[2][1](compare_items => compare_items.filter(item => item.id!==id))
            data[0][1](items => items.map(item => item.id===id?{...item,compare_flag:!item.compare_flag}:item));
          }}
        >
          Remove
        </Button>
        }
      </div>
    </div>
  );
};
export default Item;