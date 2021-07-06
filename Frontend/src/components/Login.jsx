import React, {useState} from 'react';

const alert = {
    info: {class: 'alert alert-light', text: 'Write your User and Pass'},
    incorrect: {class: 'alert alert-warning', text: 'Credentials are incorrect'}
}

const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [alertStatus, setAlertStatus] = useState('info')
    const [loggedIn, setLoggedIn] = useState(false)

    const handleAlert = () => {
        return (
            <div className={alert[`${alertStatus}`].class} role="alert">
                {alert[`${alertStatus}`].text}
            </div>
        ) 
    }


    const handleLogin = (e) => {
        e.preventDefault()
        console.log(user)
        console.log(password)
    }


    return(
        <form className="login-form">
            {handleAlert()}
            <div className="form-group">
                <label htmlFor="user" className="login-label">User: </label>
                <input type="text" name="username" id="username" onChange={(e) => setUser(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="password" classname="login-label">Pass: </label>
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleLogin}>Submit</button>
        </form>
    )
}

export default Login