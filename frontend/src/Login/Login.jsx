import './Login.css'
import { Link } from 'react-router-dom'

export default function Login(){
    return(
        <div>
            <form class="form">
                <p class="form-title">Sign in to your account</p>
                <div class="input-container">
                    <input type="email" placeholder="Enter email" />
                    <span></span>
                </div>

                <div class="input-container">
                    <input type="password" placeholder="Enter password" />
                </div>
            
                <button type="submit" class="submit">
                    Sign in
                </button>

                <div id='noAccount'>
                     No account ?
                    <Link to="/register">
                        Sign up
                    </Link>
                </div>            
            </form>
        </div>
    )
}