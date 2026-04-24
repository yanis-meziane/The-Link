import './User.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

export default function User() {
    const [nbJoueurs, setNbJoueurs] = useState('');
    const [noms, setNoms] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleNbChange = (e) => {
        const val = parseInt(e.target.value);
        if (val >= 2 && val <= 4) {
            setNbJoueurs(val);
            setNoms(Array(val).fill(''));
        }
    };

    const handleNomChange = (index, value) => {
        const updated = [...noms];
        updated[index] = value;
        setNoms(updated);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:3001/api/cards', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ players: noms })
            });

            const data = await response.json();

            if (data.success) {
                navigate('/game', { state: { cards: data.cards, players: noms } });
            } else {
                setError(data.message || 'Erreur');
            }
        } catch (err) {
            setError('Erreur de connexion au serveur');
        }
    };

    return (
        <div id="registerID">
            <form onSubmit={handleSubmit} className="form">
                <p className="form-title">Start a game</p>

                <div className="input-container">
                    <input
                        type="number"
                        placeholder="Nombre de joueurs..."
                        min={2}
                        max={4}
                        value={nbJoueurs}
                        onChange={handleNbChange}
                        required
                    />
                </div>

                {noms.map((nom, i) => (
                    <div className="input-container" key={i}>
                        <input
                            type="text"
                            placeholder={`Nom du joueur ${i + 1}...`}
                            value={nom}
                            onChange={(e) => handleNomChange(i, e.target.value)}
                            required
                        />
                    </div>
                ))}

                {error && <p style={{ color: 'red' }}>{error}</p>}

                {nbJoueurs >= 2 && (
                    <button type="submit" className="submit">
                        Jouer
                    </button>
                )}
            </form>
        </div>
    );
}