import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import useStyles from './styles'

function Cart( {cart}) {

    const classes = useStyles()
    

    const EmptyCart = () => (
        <Typography variant="subtitle">You have no items in your Shopping Cart, start adding some!</Typography>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {
                    cart.line_items.map((item) => (
                        <Grid item xs={12} sm={4} key={item.id}>
                            <div>{item.name}</div>
                        </Grid>
                    ))
                }

            </Grid>
            <div>
                <Typography varian="h4"> Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty cart</Button>
                    <Button className={classes.checkoutButton}  size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    )

    if (!cart.line_items) return 'Loading';
    
    return (
       <Container>
           <div className={mergeClasses.toolbar} />
           <Typography className={mergeClasses.title} variant="h3">Your Shopping Cart</Typography>
           {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
       </Container>
    )
}

export default Cart
