import './Game.css'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Game() {
    const { state } = useLocation();
    const cards = state?.cards || [];
    const [index, setIndex] = useState(0);

    if (cards.length === 0) return <p>Aucune carte trouvée pour ces joueurs.</p>;

    const card = cards[index];
    const isLast = index === cards.length - 1;

    return (
        <div id="gameWrapper">
            <div id="cardRow">

                <button id="arrowBtn" onClick={() => setIndex(index - 1)} style={{ visibility: index > 0 ? 'visible' : 'hidden' }}>
                    &#8249;
                </button>

                <div className="card">
                    <div className="content">
                        <div className="back">
                            <div className="back-content">
                                <strong>Qui a dit ça ?</strong>
                                <div className="description">
                                    <p>{card.sentences}</p>
                                </div>
                            </div>
                        </div>
                        <div className="front">
                            <div className="front-content">
                                <strong>{card.people}</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <button id="arrowBtn" onClick={() => setIndex(index + 1)} style={{ visibility: !isLast ? 'visible' : 'hidden' }}>
                    &#8250;
                </button>

            </div>
            <span id="cardCounter">{index + 1} / {cards.length}</span>
        </div>
    );
}