import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import { Button, Box, Menu, Grid, Toolbar, MenuItem, Container, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import './Home.css';

const CircleButton = styled(Button)(({ theme }) => ({
    width: '0px',
    height: '55px',
    borderRadius: '100%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
}));


const Home = () => {
    return (
        <Box className="MainBox">
            <Header />
            <Box className="contentHome">
                <Container maxWidth="lg">
                    <Grid className="heading1">
                        <Grid className="heading1-LeftSide">1</Grid>
                        <Grid className="heading1-RightSide">
                            <Box sx={{ marginLeft: '50px' }}>
                                <Typography variant='h5'> HEADING</Typography>
                                <Typography> Footium is a multiplayer football management game. Footium Clubs allow you to become an Owner</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid className="cardGrid">
                        <Grid className='cardGridHeader'>
                            <Typography className="headerText" variant='h6'>
                                Auctions live - put on by SF admin + user
                            </Typography>
                            <Button variant='contained'>View All</Button>
                        </Grid>
                        <Grid className="adminUserCards">
                            <Box className="sfAdminCard">
                                <Box className="cardTop">
                                    <Box className="NewandNumber">
                                        <Box className="NewButtonBox">
                                            <Button sx={{ backgroundColor: '#f10ecd', width: '48px', height: '21px', color: 'black', fontWeight: 700 }}>New</Button>
                                        </Box>
                                        <Box sx={{ padding: '10px' }}>
                                            <CircleButton sx={{ color: 'black' }}>75</CircleButton>
                                        </Box>
                                    </Box>
                                    <Box className="starIcon">
                                        <StarIcon sx={{ color: '#939393', fontSize: '35px' }} />
                                    </Box>
                                </Box>
                                <Box className="cardDownSection">
                                    <Container>
                                        <Grid className="cardDownSectionGrid">
                                            <Box className="topText">
                                                <span>Andy Jacobs</span>
                                                <span>#55150</span>
                                            </Box>
                                            <Box className="collectionText">
                                                Collection: 2021-22
                                            </Box>
                                            <Box className="SecondHeading">
                                                <span>Mid-fielder</span>
                                                <span>13.99</span>
                                            </Box>
                                            <Box className="secondHeadingBelow">
                                                <Typography className='cardTime'>00m 52s</Typography>
                                                <Typography className='cardBids'>11 Bids</Typography>
                                            </Box>
                                        </Grid>
                                    </Container>
                                </Box>
                            </Box>
                            <Box className="sfAdminCard">
                                <Box className="cardTop">
                                    <Box className="NewandNumber">
                                        <Box className="NewButtonBox">
                                            <Button sx={{ backgroundColor: '#f10ecd', width: '48px', height: '21px', color: 'black', fontWeight: 700 }}>New</Button>
                                        </Box>
                                        <Box sx={{ padding: '10px' }}>
                                            <CircleButton sx={{ color: 'black' }}>75</CircleButton>
                                        </Box>
                                    </Box>
                                    <Box className="starIcon">
                                        <StarIcon sx={{ color: '#939393', fontSize: '35px' }} />
                                    </Box>
                                </Box>
                                <Box className="cardDownSection">
                                    <Container>
                                        <Grid className="cardDownSectionGrid">
                                            <Box className="topText">
                                                <span>Andy Jacobs</span>
                                                <span>#55150</span>
                                            </Box>
                                            <Box className="collectionText">
                                                Collection: 2021-22
                                            </Box>
                                            <Box className="SecondHeading">
                                                <span>Mid-fielder</span>
                                                <span>13.99</span>
                                            </Box>
                                            <Box className="secondHeadingBelow">
                                                <Typography className='cardTime'>00m 52s</Typography>
                                                <Typography className='cardBids'>11 Bids</Typography>
                                            </Box>
                                        </Grid>
                                    </Container>
                                </Box>
                            </Box>
                            <Box className="sfAdminCard">
                                <Box className="cardTop">
                                    <Box className="NewandNumber">
                                        <Box className="NewButtonBox">
                                            <Button sx={{ backgroundColor: '#f10ecd', width: '48px', height: '21px', color: 'black', fontWeight: 700 }}>New</Button>
                                        </Box>
                                        <Box sx={{ padding: '10px' }}>
                                            <CircleButton sx={{ color: 'black' }}>75</CircleButton>
                                        </Box>
                                    </Box>
                                    <Box className="starIcon">
                                        <StarIcon sx={{ color: '#939393', fontSize: '35px' }} />
                                    </Box>
                                </Box>
                                <Box className="cardDownSection">
                                    <Container>
                                        <Grid className="cardDownSectionGrid">
                                            <Box className="topText">
                                                <span>Andy Jacobs</span>
                                                <span>#55150</span>
                                            </Box>
                                            <Box className="collectionText">
                                                Collection: 2021-22
                                            </Box>
                                            <Box className="SecondHeading">
                                                <span>Mid-fielder</span>
                                                <span>13.99</span>
                                            </Box>
                                            <Box className="secondHeadingBelow">
                                                <Typography className='cardTime'>00m 52s</Typography>
                                                <Typography className='cardBids'>11 Bids</Typography>
                                            </Box>
                                        </Grid>
                                    </Container>
                                </Box>
                            </Box>
                            <Box className="sfAdminCard">
                                <Box className="cardTop">
                                    <Box className="NewandNumber">
                                        <Box className="NewButtonBox">
                                            <Button sx={{ backgroundColor: '#f10ecd', width: '48px', height: '21px', color: 'black', fontWeight: 700 }}>New</Button>
                                        </Box>
                                        <Box sx={{ padding: '10px' }}>
                                            <CircleButton sx={{ color: 'black' }}>75</CircleButton>
                                        </Box>
                                    </Box>
                                    <Box className="starIcon">
                                        <StarIcon sx={{ color: '#939393', fontSize: '35px' }} />
                                    </Box>
                                </Box>
                                <Box className="cardDownSection">
                                    <Container>
                                        <Grid className="cardDownSectionGrid">
                                            <Box className="topText">
                                                <span>Andy Jacobs</span>
                                                <span>#55150</span>
                                            </Box>
                                            <Box className="collectionText">
                                                Collection: 2021-22
                                            </Box>
                                            <Box className="SecondHeading">
                                                <span>Mid-fielder</span>
                                                <span>13.99</span>
                                            </Box>
                                            <Box className="secondHeadingBelow">
                                                <Typography className='cardTime'>00m 52s</Typography>
                                                <Typography className='cardBids'>11 Bids</Typography>
                                            </Box>
                                        </Grid>
                                    </Container>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid sx={{ marginTop: '63px' }}>
                        <Grid className='cardGridHeader'>
                            <Typography className="headerText" variant='h6'>
                                Auctions live : Factio Player NFT
                            </Typography>
                            <Button variant='contained'>View All</Button>
                        </Grid>
                        <Grid className="adminUserCards">
                            <Box className="sfAdminCard">
                                <Box className="cardTop">
                                    <Box className="NewandNumber">
                                        <Box className="NewButtonBox">
                                            <Button sx={{ backgroundColor: '#f10ecd', width: '48px', height: '21px', color: 'black', fontWeight: 700 }}>New</Button>
                                        </Box>
                                        <Box sx={{ padding: '10px' }}>
                                            <CircleButton sx={{ color: 'black' }}>75</CircleButton>
                                        </Box>
                                    </Box>
                                    <Box className="starIcon">
                                        <StarIcon sx={{ color: '#939393', fontSize: '35px' }} />
                                    </Box>
                                </Box>
                                <Box className="cardDownSection">
                                    <Container>
                                        <Grid className="cardDownSectionGrid">
                                            <Box className="topText">
                                                <span>Andy Jacobs</span>
                                                <span>#55150</span>
                                            </Box>
                                            <Box className="collectionText">
                                                Collection: 2021-22
                                            </Box>
                                            <Box className="SecondHeading">
                                                <span>Mid-fielder</span>
                                                <span>13.99</span>
                                            </Box>
                                            <Box className="secondHeadingBelow">
                                                <Typography className='cardTime'>00m 52s</Typography>
                                                <Typography className='cardBids'>11 Bids</Typography>
                                            </Box>
                                        </Grid>
                                    </Container>
                                </Box>
                            </Box>
                            <Box className="sfAdminCard">
                                <Box className="cardTop">
                                    <Box className="NewandNumber">
                                        <Box className="NewButtonBox">
                                            <Button sx={{ backgroundColor: '#f10ecd', width: '48px', height: '21px', color: 'black', fontWeight: 700 }}>New</Button>
                                        </Box>
                                        <Box sx={{ padding: '10px' }}>
                                            <CircleButton sx={{ color: 'black' }}>75</CircleButton>
                                        </Box>
                                    </Box>
                                    <Box className="starIcon">
                                        <StarIcon sx={{ color: '#939393', fontSize: '35px' }} />
                                    </Box>
                                </Box>
                                <Box className="cardDownSection">
                                    <Container>
                                        <Grid className="cardDownSectionGrid">
                                            <Box className="topText">
                                                <span>Andy Jacobs</span>
                                                <span>#55150</span>
                                            </Box>
                                            <Box className="collectionText">
                                                Collection: 2021-22
                                            </Box>
                                            <Box className="SecondHeading">
                                                <span>Mid-fielder</span>
                                                <span>13.99</span>
                                            </Box>
                                            <Box className="secondHeadingBelow">
                                                <Typography className='cardTime'>00m 52s</Typography>
                                                <Typography className='cardBids'>11 Bids</Typography>
                                            </Box>
                                        </Grid>
                                    </Container>
                                </Box>
                            </Box>
                            <Box className="sfAdminCard">
                                <Box className="cardTop">
                                    <Box className="NewandNumber">
                                        <Box className="NewButtonBox">
                                            <Button sx={{ backgroundColor: '#f10ecd', width: '48px', height: '21px', color: 'black', fontWeight: 700 }}>New</Button>
                                        </Box>
                                        <Box sx={{ padding: '10px' }}>
                                            <CircleButton sx={{ color: 'black' }}>75</CircleButton>
                                        </Box>
                                    </Box>
                                    <Box className="starIcon">
                                        <StarIcon sx={{ color: '#939393', fontSize: '35px' }} />
                                    </Box>
                                </Box>
                                <Box className="cardDownSection">
                                    <Container>
                                        <Grid className="cardDownSectionGrid">
                                            <Box className="topText">
                                                <span>Andy Jacobs</span>
                                                <span>#55150</span>
                                            </Box>
                                            <Box className="collectionText">
                                                Collection: 2021-22
                                            </Box>
                                            <Box className="SecondHeading">
                                                <span>Mid-fielder</span>
                                                <span>13.99</span>
                                            </Box>
                                            <Box className="secondHeadingBelow">
                                                <Typography className='cardTime'>00m 52s</Typography>
                                                <Typography className='cardBids'>11 Bids</Typography>
                                            </Box>
                                        </Grid>
                                    </Container>
                                </Box>
                            </Box>
                            <Box className="sfAdminCard">
                                <Box className="cardTop">
                                    <Box className="NewandNumber">
                                        <Box className="NewButtonBox">
                                            <Button sx={{ backgroundColor: '#f10ecd', width: '48px', height: '21px', color: 'black', fontWeight: 700 }}>New</Button>
                                        </Box>
                                        <Box sx={{ padding: '10px' }}>
                                            <CircleButton sx={{ color: 'black' }}>75</CircleButton>
                                        </Box>
                                    </Box>
                                    <Box className="starIcon">
                                        <StarIcon sx={{ color: '#939393', fontSize: '35px' }} />
                                    </Box>
                                </Box>
                                <Box className="cardDownSection">
                                    <Container>
                                        <Grid className="cardDownSectionGrid">
                                            <Box className="topText">
                                                <span>Andy Jacobs</span>
                                                <span>#55150</span>
                                            </Box>
                                            <Box className="collectionText">
                                                Collection: 2021-22
                                            </Box>
                                            <Box className="SecondHeading">
                                                <span>Mid-fielder</span>
                                                <span>13.99</span>
                                            </Box>
                                            <Box className="secondHeadingBelow">
                                                <Typography className='cardTime'>00m 52s</Typography>
                                                <Typography className='cardBids'>11 Bids</Typography>
                                            </Box>
                                        </Grid>
                                    </Container>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>


                    <Grid sx={{ marginTop: '63px' }}>
                        <Grid className='cardGridHeader'>
                            <Typography className="headerText" variant='h6'>
                                Player Packs
                            </Typography>
                            <Button variant='contained'>View All</Button>
                        </Grid>
                        <Grid className='playerPackGrid'>
                            <Box className="palyerPackCard">
                                <Box className="palyerPackTop">
                                    <Box className="palyerPackTopButton">
                                        <Typography className='palyerPackTopTime'>00m 52s</Typography>
                                    </Box>
                                    <Box>
                                        <img src='https://res.cloudinary.com/dolpotacg/image/upload/v1686891105/qb31dub0_1_1_yje6gi.svg' style={{ width: '200px', height: '160px', backgroundColor: '#E5E6E1', }} />
                                    </Box>
                                </Box>
                                <Box className="playerpackDown">
                                    <Container>
                                        <Grid className='playerpackDown'>
                                            <Box className='GradeText'>
                                                SILVER
                                            </Box>
                                        </Grid>
                                    </Container>
                                </Box>
                            </Box>
                            <Box className="palyerPackCard">
                                <Box className="palyerPackTop">
                                    <Box className="palyerPackTopButton">
                                        <Typography className='palyerPackTopTime'>00m 52s</Typography>
                                    </Box>
                                    <Box>
                                        <img src='https://res.cloudinary.com/dolpotacg/image/upload/v1686891105/qb31dub0_1_1_yje6gi.svg' style={{ width: '200px', height: '160px', backgroundColor: '#E5E6E1', }} />
                                    </Box>
                                </Box>
                                <Box className="playerpackDown">
                                    <Container>
                                        <Grid className='playerpackDown'>
                                            <Box className='GradeText'>
                                                GOLD
                                            </Box>
                                        </Grid>
                                    </Container>
                                </Box>
                            </Box>
                            <Box className="palyerPackCard">
                                <Box className="palyerPackTop">
                                    <Box className="palyerPackTopButton">
                                        <Typography className='palyerPackTopTime'>00m 52s</Typography>
                                    </Box>
                                    <Box>
                                        <img src='https://res.cloudinary.com/dolpotacg/image/upload/v1686891105/qb31dub0_1_1_yje6gi.svg' style={{ width: '200px', height: '160px', backgroundColor: '#E5E6E1', }} />
                                    </Box>
                                </Box>
                                <Box className="playerpackDown">
                                    <Container>
                                        <Grid className='playerpackDown'>
                                            <Box className='GradeText'>
                                                DIAMOND
                                            </Box>
                                        </Grid>
                                    </Container>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid sx={{ marginTop: '63px' }}>
                        <Grid className='cardGridHeader'>
                            <Typography className="headerText" variant='h6'>
                                Popular Coach licenses on sale
                            </Typography>
                            <Button variant='contained'>View All</Button>
                        </Grid>
                        <Grid className='PopularGrid'>
                            <Box className='PopularCard'>
                                <Box className='PopularCardLeft'></Box>
                                <Box sx={{ width: '60%', }}>
                                    <Box className="PopularCardRight">
                                        <Box className='PopularRightTop'>National</Box>
                                        <Box>
                                            <Typography className='PopularTime'>00m 52s</Typography>
                                        </Box>
                                    </Box>
                                    <Box className='PopularBuyNow'>BUY NOW</Box>
                                </Box>
                            </Box>

                            <Box className='PopularCard'>
                                <Box className='PopularCardLeft'></Box>
                                <Box sx={{ width: '60%', }}>
                                    <Box className="PopularCardRight">
                                        <Box className='PopularRightTop'>Inter National</Box>
                                        <Box>
                                            <Typography className='PopularTime'>00m 52s</Typography>
                                        </Box>
                                    </Box>
                                    <Box className='PopularBuyNow'>BUY NOW</Box>
                                </Box>
                            </Box>


                            <Box className='PopularCard'>
                                <Box className='PopularCardLeft'></Box>
                                <Box sx={{ width: '60%', }}>
                                    <Box className="PopularCardRight">
                                        <Box className='PopularRightTop'>National</Box>
                                        <Box>
                                            <Typography className='PopularTime'>00m 52s</Typography>
                                        </Box>
                                    </Box>
                                    <Box className='PopularBuyNow'>BUY NOW</Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid className='footerGrid'>
                        <Box className='marketPlaceBanner'>
                            Market Place Banner
                        </Box>
                    </Grid>
                </Container>
            </Box>
            <Grid className="footerText">
                <Footer />
            </Grid>
        </Box >
    )
}

export default Home;







