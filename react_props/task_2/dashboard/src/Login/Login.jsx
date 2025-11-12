

import './Login.css'

function Login() {
    return (
        <>
        <div className='App-body'><p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" data-testid="email"></input>
        <label htmlFor="pw">Password</label>
        <input type="password" id="pw" data-testid="pw"></input>
        <button data-testid="btn" type='submit'>OK</button>
        </div>          
        </>
    )
}

 export default Login