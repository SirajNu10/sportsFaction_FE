import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import { Button, Box, Menu, Grid, Toolbar, MenuItem, Container, IconButton, Stack, Tooltip, Typography } from '@mui/material';

const MarketPlace = () => {
    return (
        <Box sx={{ backgroundColor: 'black', width: '100%' }}>
            <Header />
            Market Place page

            <Grid sx={{ marginTop: '137px' }}>
                <Footer />
            </Grid>
        </Box>
    )
}

export default MarketPlace;
