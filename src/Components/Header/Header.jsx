import React from "react";
import classes from './Header.module.css'
export default function Header() {
    return(
        <header className={classes.header}>
            <h1 className={classes.title}>Todos</h1>
        </header>
    )
}