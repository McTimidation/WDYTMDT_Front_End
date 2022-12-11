import React, { useState } from "react"
import AuthService from "../../services/auth.service";
import Layout from "../layout";
// import Header from "../components/header.js";

const Register = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        passwordConf: "",

    })

    const handleChange = (key, value) => {
        setUser({
            ...user,
            [key]: value
        })
    }

    const handleRegister = (e) => {
        e.preventDefault();
        AuthService.register(user)
    }

    return (
        // <Header>
        <Layout>
        <div className="c-form">
            <form onSubmit={handleRegister}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={(e) => handleChange('username', e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="pass">Password (8 characters minimum):</label>
                    <input
                        type="password"
                        id="pass"
                        name="password"
                        minLength="5"
                        required
                        onChange={(e) => handleChange('password', e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="passConf">Confirm Password:</label>
                    <input
                        type="password"
                        id="passConf"
                        name="password"
                        minLength="5"
                        required
                        onChange={(e) => handleChange('passwordConf', e.target.value)} />
                </div>

                <input
                    type="submit"
                    value="Register"
                    disabled={(
                        user.password &&
                        user.password.length >= 5 &&
                        user.password === user.passwordConf
                    ) ? false : true}
                />
            </form>
        </div>
        </Layout>
    )

}

export default Register