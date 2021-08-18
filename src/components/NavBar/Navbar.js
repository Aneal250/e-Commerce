import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';
import useStyles from './Styles';
// import logo from '../../public//img/e-commerce.png'

function Navbar( {totalItems}) {

    const classes = useStyles()
    return (
        <>
            <AppBar position='fixed' className={mergeClasses.appBar} color='inherit'>
                <Toolbar>
                    <Typography  variant="h6" className={classes.title} color="inherit">
                        <img src='../img/e-commerce.png' alt="" height="25px" className={classes.image} />commerce.js
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button} >
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart/>
                            </Badge>
                     </IconButton>
                    </div>
                </Toolbar>
                
            </AppBar>        
        </>
    )
}

export default Navbar
