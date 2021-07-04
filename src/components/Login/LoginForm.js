import React, { useState } from 'react'
import { required } from '../../utils/validators/validators'

const LoginForm = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let setLogin = (e) => {
        e.preventDefault()
        props.setLogin(email, password)
    }

    return (
        <form className="login-form" onSubmit={setLogin} >
            <label htmlFor="email">Email:</label>
            <input placeholder="Email" name="email" validate={[required]} onChange={e => setEmail(e.target.value)} />
            <label htmlFor="password">Password:</label>
            <input placeholder="Password" name="password" type="password" validate={[required]} onChange={e => setPassword(e.target.value)} />
            <button>Login</button>
        </form>
    )
}

export default LoginForm