import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core/';

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

const Item = ({ id, title, price, company, image, test }) => {
  const classes = useStyles();
  return (
    <div className="main">
      <div className={classes.item}>
        <img src={image} alt={title} height="200px"/>
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
      </div>
    </div>
  );
};

export default Item;