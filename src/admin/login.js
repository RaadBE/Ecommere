import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [emailError, setemailError] = useState("");
    const handleLogin = async () => {
        try {
            const response = await fetch('https://ashmademoiselle-8623d0938879.herokuapp.com/login/admin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password,role })
            });
            const data = await response.json();
            console.log("Full Response:", data);
            if (data.accesToken) {
                localStorage.setItem('userToken', data.accesToken);
                alert('you are logged in');
                console.log(data);  // This will show the structure of the response.
                navigate('/admin');  // Navigate to the admin route directly
            } else {
                // Handle error, e.g., show a notification or update UI to indicate login failure
                console.error("Failed to login");
            }

        } catch (error) {
            console.error("Error during the fetch:", error);
        }
    };

    const loginSubmit = (e) => {
        e.preventDefault();
        if (handleValidation()) {
            handleLogin();
        }
    };

    const handleValidation = () => {
        let formIsValid = true;

        // Email validation
        if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            formIsValid = false;
            setemailError("Email Not Valid");
        } else {
            setemailError("");
        }

        // Password validation
        if (!password.match(/^[a-zA-Z0-9]{5,22}$/)) {
            formIsValid = false;
            setpasswordError("Only Letters and length must be min 8 Characters and Max 22 Characters");
        } else {
            setpasswordError("");
        }

        return formIsValid;

    };

    return (
        <div className="containerr">
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <form id="loginform" onSubmit={loginSubmit}>
                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="EmailInput"
                                name="EmailInput"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <small id="emailHelp" className="text-danger form-text">
                                {emailError}
                            </small>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <small id="passworderror" className="text-danger form-text">
                                {passwordError}
                            </small>
                        </div>
                        <div className="form-group form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                            />
                            <label className="form-check-label">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
