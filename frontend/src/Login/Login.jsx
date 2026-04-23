import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

export default function Login(){
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                // Stocker les informations utilisateur
                localStorage.setItem("type", data.type.trim());
                localStorage.setItem("userId", data.userId);
                localStorage.setItem("firstname", data.firstname);
                
                setSuccess('Connexion réussie !');
                
                setTimeout(() => {
                    if (data.type === "admin") {
                        navigate('/admin');
                    } else {
                        navigate('/user');
                    }
                }, 500);

            } else {
                setError(data.message || 'Erreur lors de la connexion');
            }

        } catch (error) {
            console.error('Erreur:', error);
            setError('Erreur de connexion au serveur');
        }
    };
    return(
        <div>
            <form onSubmit={handleSubmit} class="form">
                <p class="form-title">Sign in to your account</p>
                <div class="input-container">
                    <input type="email" name="email" id="emailLogin" placeholder="Votre mail..." minLength={1} maxLength={30} value={formData.email} onChange={handleChange} required />
                </div>

                <div class="input-container">
                   <input type="password" name="password" id="password" placeholder="Votre mot de passe..." value={formData.password} onChange={handleChange} required />
                </div>
            
                <button type="submit" class="submit">
                    Sign in
                </button>

                 {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}


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