import React from 'react'
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import '../App.css'
import {useNavigate}  from "react-router-dom";

export default function SignInPage() {
    
    return (
        <center>
        <div>
            <MuiThemeProvider>
            <AppBar title="Login"/>
        <div className="text-center m-5-auto">
            <form action="/navbar">
                <p>
                <TextField
                    hintText="Enter your Username"
                    floatingLabelText="Username"
                    required />
                </p>
                <p>
                <TextField
                    hintText="Enter your Password"
                    floatingLabelText="Password"
                    required />
                    {/* <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/> */}
                    {/* <input type="password" name="password" required /> */}
                </p>
                <p>
                <button id="sub_btn" type="submit">Login</button>
                {/* <RaisedButton label="Login" primary={true} style={style} onClick={<Link to="/navbar"></Link>}></RaisedButton> */}
                </p>
            </form>
            <footer>
                <p>Not an existing viewer? <Link to="/register">Register now!</Link></p>
            </footer>
        </div>
        </MuiThemeProvider>
        </div>
        </center>
    )
}
const style = {margin: 15,};