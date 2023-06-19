import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, Box, Menu, Grid, Toolbar, Container, MenuItem, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const pages = ['How', 'Roadmap', 'Team', 'FAQ', 'Leaderboard', 'Marketplace'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Home() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const navigate = useNavigate();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleMarketplaceClick = () => {
        navigate('/market-place');
    };

    return (
        <Box sx={{ backgroundColor: '#0d0d15' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Button
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            color: 'black',
                            textDecoration: 'none',
                            p: 0,
                            backgroundColor: '#d9d9d9',
                            width: '123px',
                            height: '47px',
                        }}
                    >
                        Logo
                    </Button>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            sx={{ color: "#ffff" }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'flex' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" sx={{ fontSize: '16px' }}>
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Button
                        href="/"
                        sx={{
                            mr: 2,
                            display: 'flex',
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Logo
                    </Button>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                        <Button
                            key="Marketplace"
                            onClick={handleMarketplaceClick}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Marketplace
                        </Button>
                    </Box>

                    <Box>
                        <TwitterIcon
                            sx={{
                                fontSize: '30px',
                                marginRight: '17.87px',
                                color: 'white',
                                backgroundColor: 'black',
                            }}
                        />
                    </Box>
                    <Box>
                        <InstagramIcon
                            sx={{
                                fontSize: '30px',
                                marginRight: '17.87px',
                                color: 'white',
                                backgroundColor: 'black',
                            }}
                        />
                    </Box>
                    <Box>
                        <FacebookIcon
                            sx={{
                                fontSize: '30px',
                                marginRight: '78.11px',
                                color: 'white',
                                backgroundColor: 'black',
                            }}
                        />
                    </Box>
                    <Box>
                        <CircleNotificationsIcon
                            sx={{
                                fontSize: '30px',
                                marginRight: '17.87px',
                                color: 'blue',
                                backgroundColor: 'white',
                            }}
                        />
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Button
                            onClick={handleOpenUserMenu}
                            sx={{
                                p: 0,
                                backgroundColor: '#d9d9d9',
                                width: '169px',
                                height: '47px',
                                color: 'black',
                            }}
                        >
                            Wallet ID
                        </Button>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </Box>
    );
}

export default Home;
