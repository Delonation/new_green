import React from "react";
import styles from './styles';
import { Button, TextareaAutosize, TextField, Container, Box, Card, CardContent, Divider } from "@mui/material";

const Contact = ({ height }) => {
    let [name, setName] = React.useState('');
    let [tele, setTele] = React.useState('')
    let [pert, setPert] = React.useState('')
    const submitContact = () => {

        if (name !== "" && tele !== "" && pert !== "") {
            console.log(`${name} , ${tele}, ${pert}`)


        } else {
            alert("Please Fill All Fields!")
        }

    }
    return <div id="contact"
        style={{ minHeight: height, backgroundColor: '#527956' }}>
        <Container justify="center" sx={{ paddingTop: 10 }}>
            <Box style={{ display: 'flex', justifyContent: 'center', paddingBottom: 60 }} >
                <Card sx={{ width: 700, padding: '0 50px' }}>
                    <CardContent>
                        <h1
                            style={styles.textSlimH1}
                            className='no-margin text-primary'>
                            Contact Us
                        </h1>
                        <Divider />
                        <h1
                            style={{ fontWeight: 'normal', fontSize: '30px' }}
                            className='no-margin text-primary'>
                            Tulis Pertanyaan mu disini
                        </h1>
                        <p className='text-primary' style={{ fontWeight: 'bold', fontSize: '30px' }}> Nama *</p>
                        <TextField sx={{ width: '80%' }} onInput={(event) => { setName(event.target.value) }} label="Nama" variant="filled" />
                        <p className='text-primary' style={{ fontWeight: 'bold', fontSize: '30px' }}> Telepon *</p>
                        <TextField sx={{ width: '80%' }} onInput={(event) => { setTele(event.target.value) }} label="Telepon" variant="filled" />
                        <p className='text-primary' style={{ fontWeight: 'bold', fontSize: '30px' }}> Pertanyaan *</p>
                        <TextareaAutosize
                            onInput={(event) => { setPert(event.target.value) }}
                            minRows={10}
                            aria-label="maximum height"
                            placeholder="Pertanyaan"
                            style={{ width: '78%', backgroundColor: '#E8E8E8', border: 'none', padding: '0 12px', fontSize: '16px', fontFamily: 'grInter', borderBottom: '1px solid grey !important' }}
                        />
                        <Divider />
                        <Button onClick={submitContact} style={{ maxWidth: '100px', float: 'right', textAlign: 'center', backgroundColor: '#527956', height: '50px' }} variant="contained">Submit</Button>
                        <br />
                        <br />
                    </CardContent>
                </Card>
            </Box>
        </Container>


    </div >

}


export default Contact;