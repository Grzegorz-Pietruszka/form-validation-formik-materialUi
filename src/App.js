import './App.css';
import RegisterForm from "./components/RegisterForm";
import React from "react";
import {Container} from "@material-ui/core";

function App() {
    return (
        <div>
            <Container>
                <RegisterForm/>
            </Container>
        </div>
    );
}

export default App;
