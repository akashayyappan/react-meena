import React from 'react'
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import '../App.css'

export default function SignUpPage() {

    return (
        <center>
        <div>
            <MuiThemeProvider>
            <AppBar title="Register"/>
            
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your account</h5>
            <form action="/">
                <p>
                <TextField
                    hintText="Enter your Username"
                    floatingLabelText="Username"
                    required />
                </p>
                <p>
                <TextField
                    hintText="Enter your Email"
                    floatingLabelText="Email"
                    required /> 
                </p>
                <p>
                    <TextField
                    hintText="Enter your Password"
                    floatingLabelText="Password"
                    required />
                </p>
                <p>
                <RaisedButton label="Register" primary={true} style={style}></RaisedButton>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Login</Link>.</p>
            </footer>
        </div>
        </MuiThemeProvider>
        </div>
        </center>
    )

}
const style = {margin: 15,};