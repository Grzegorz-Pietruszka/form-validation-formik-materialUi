import './App.css';
import RegisterForm from "./components/RegisterForm";
import React from "react";
import {Container, Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        backgroundImage: 'linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)',
        borderRadius: '10px',
        marginTop: '10%'
    },
    gridContainer: {
        padding: '30px'
    }
})

function App() {
    const {container, gridContainer} = useStyles();

    return (
        <div>
            <Container maxWidth='sm' className={container}>
                <Grid container justify="center" className={gridContainer}>
                    <Grid item alignContent={"center"}>
                        <RegisterForm/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
