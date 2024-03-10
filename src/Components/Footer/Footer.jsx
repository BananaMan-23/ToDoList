import React from "react";
import classes from "./Footer.module.css";
import GroupButton from '../../Ui/GroupButton'
export default function Footer(props) {
  return (
    <footer className={classes.footer}>
      <span className={classes.footer__count}>
        <strong>{props.count}</strong>
        'item' 'left'
      </span>
      <div className={classes.footer__filters}>
        <GroupButton {...props}/>
      </div>
    </footer>
  );
}
