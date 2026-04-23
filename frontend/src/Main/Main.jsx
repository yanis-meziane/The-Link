import './Main.css'
import { Link } from 'react-router-dom'

export default function Main(){
    return(
        <div>
            <header className='headerMain'>
                <nav className='navMain'>
                    <h1>The Link</h1>
                    <Link to="/login" className='LinkNav'>
                        Se connecter/Créer un compte
                    </Link>
                </nav>
            </header>

            <main id='mainID'>
                <article id='articleMain'>
                    <p>Bienvenue à The Link, le célèbre jeu où il faut deviner qui de tes ami(e)s a dit cette phrase.</p>
                </article>
            </main>
        </div>
    )
}