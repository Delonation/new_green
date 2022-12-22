import { Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
import styles from './styles'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
const Footer = ({ height }) => {
    return <div
        style={{ minHeight: height, backgroundColor: '#527956', paddingTop: 50 }}>
        <Container style={{ paddingTop: 50 }}>
            <Box>
                <Grid container>
                    <Grid style={{ display: 'flex', flexDirection: 'column' }} item xs={9}>
                        <span style={{ ...styles.footerLink }}><a style={{ textDecoration: 'none', color: 'white' }} href="#about">ABOUT US</a></span>
                        <span style={{ ...styles.footerLink }}><a style={{ textDecoration: 'none', color: 'white' }} href="#sitemap">SITEPLAN</a></span>
                        <span style={{ ...styles.footerLink }}><a style={{ textDecoration: 'none', color: 'white' }} href="#lokasi">LOKASI</a></span>
                        <span style={{ ...styles.footerLink }}><a style={{ textDecoration: 'none', color: 'white' }} href="#type">TYPE</a></span>
                        <span style={{ ...styles.footerLink }}><a style={{ textDecoration: 'none', color: 'white' }} href="#contact">CONTACT US</a></span>
                        <Grid style={{ display: 'flex', flexDirection: 'row' }} item xs={9}>
                            <span style={{ ...styles.footerLink }}><a style={{ textDecoration: 'none', color: 'white' }} href="https://www.instagram.com/neogreenresidence/">{<InstagramIcon sx={{ color: "white", fontSize: '47px' }} />}</a></span>
                            <span style={{ ...styles.footerLink }}><a style={{ textDecoration: 'none', color: 'white' }} href="https://www.facebook.com/profile.php?id=100088050140148&mibextid=LQQJ4d">{<FacebookIcon sx={{ color: "white", fontSize: '47px' }} />}</a></span>
                            <span style={{ ...styles.footerLink }}><a style={{ textDecoration: 'none', color: 'white' }} href=" https://www.tiktok.com/@neogreenresidence"><FontAwesomeIcon sx={{ color: "white", fontSize: '25px' }} icon={faTiktok}></FontAwesomeIcon></a></span>

                        </Grid>
                    </Grid>

                    <Grid item xs={3}>
                        <span style={{ ...styles.footerLink }}>MITRA KAMI:</span>
                    </Grid>
                </Grid>
            </Box>
            <Box style={{ marginTop: 50 }}>
                <Grid container>
                    <Grid item style={{ display: 'flex', justifyContent: 'center' }} >
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span style={{ ...styles.footerAddress }}>Address:</span>
                            <span style={{ ...styles.footerAddress, textAlign: 'center' }}>Jl. Raya Bogor No.17, RT.07/RW.01, Tanah Baru, Kec. Bogor Utara,
                                Kota Bogor, Jawa Barat 16151</span>
                            <br />
                            <span style={{ ...styles.footerAddress, marginTop: 20 }}>Copyright <CopyrightIcon /> 2022, <span style={{ textDecoration: 'underline' }}>Neo Green Residence</span></span>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </div>

}

export default Footer;