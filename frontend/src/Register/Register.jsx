import './Register.css'
import { Link } from 'react-router-dom'

export default function Register(){
    return(
        <div id='registerID'>
            <form class="form">
                <p class="form-title">Crées-toi ton compte</p>

                <div class="input-container">
                    <input type="firstname" placeholder="Enter your firstname" />
                    <span></span>
                </div>

                <div class="input-container">
                    <input type="lastname" placeholder="Enter your lastname" />
                    <span></span>
                </div>

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
                     An account ?
                    <Link to="/login">
                        Login up
                    </Link>
                </div>            
            </form>
        </div>
    )
}