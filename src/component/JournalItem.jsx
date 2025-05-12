import React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CSS/Journal.css';

// Import all assets under ../assets/Journal
const assets = import.meta.glob(
    '../assets/Journal/*/*.{png,jpg,jpeg,svg,gif,mp4}',
    { eager: true, as: 'url' }
);

function JournalItem() {
    const { id } = useParams();

    // Map IDs to titles and descriptions
    const titleMap = {
        '01': 'My passion for Formula 1: emotions, speed and adrenaline.',
        '02': 'My passion for art: in search of beauty',
    };
    const name = titleMap[id] || id;
    const description = id === '01'
        ? `My passion for Formula 1: emotions, speed and adrenaline.
            Formula 1 is not just a sport, it is an experience that overwhelms you, excites you, makes you live every curve and every straight as if you were behind the wheel. It is a passion that comes from the heart and is nourished by a continuous search for perfection, speed and innovation. For me, the world of F1 is a journey that begins every time an engine roars, a car sprints to the start, and every overtaking leaves you breathless.

            Monza, 2018. That race is one of the memories I carry within me, a moment that made me feel even closer to the magic of F1. It was a weekend in which the emotion was palpable, the atmosphere full of expectations. The passion of the public, the history of that track, and the sound of the engines that reverberated in the air... it was as if everything was synchronized, as if every detail was perfect.

            Seeing the race live was like entering another world, a world where time seems to slow down, where every millisecond counts. The tension that built up curve after curve, the heart that beat wildly during every overtaking and the roar of the crowd at every acceleration... There is nothing like it. Monza is a special place, a symbol of passion, and that race will remain in my memory forever.

            That race was not just a sporting event. It was a mix of emotions, hopes and dreams that intertwined with the reality of every driver. Because F1, in addition to speed and technique, is made of stories. Stories of sacrifice, dedication, victories and defeats that teach you a lot about life. Watching a car speeding on the track is like seeing courage incarnate, the desire to overcome one's limits, to always be one step ahead, both on the track and in one's own existence.

            And every time I sit in front of a television or take part in a live race, I feel the same adrenaline that has conquered me since I was a child. It is a passion that never stops growing, that evolves with me, that feeds on every technological innovation, every curve taken to perfection. F1 is more than just a sport: it is a way of living life, with passion, speed and a continuous search for emotions.`
        : id === '02'
        ? `Art is a language that does not need words to express itself. It is a way of communicating emotions, stories and visions of the world that go beyond the everyday. For me, art is also a refuge, a place where I can lose track of time, immerse myself completely in the beauty of what surrounds me and, at the same time, relax. Every visit to an exhibition is an opportunity to discover, to live a sensory experience that allows me to see the world with different eyes.

            I love losing myself among the canvases of Vincent van Gogh, whose use of color is a dance of emotions. Looking at his landscapes, his still lifes, his scenes of everyday life, is like entering his tormented soul, but also incredibly vibrant with passion. His ability to convey beauty and suffering at the same time touches me deeply. Every brushstroke seems to tell a story, and his vision of the world is so unique that each work is a window onto an emotional dimension that can shake the heart.

            On the other hand, Gian Lorenzo Bernini fascinates me with his ability to "give life" to stone. His sculptures almost seem to breathe, as if the artist had captured a moment of movement, a feeling of tension that captures you and forces you to reflect. His mastery in shaping marble with such delicacy, managing to make it soft as if it were flesh, is something extraordinary. His works, such as "The Abduction of Proserpina" or "The Ecstasy of Saint Teresa", are not just sculptures; they are stories carved into the material, full of passion and spirituality.

            Every time I enter a gallery or visit an exhibition, the emotion I feel is different, but always intense. The beauty of art is that it never runs out, it never stops surprising. It is a continuous journey, that never ends, and that allows me to see the world through the interpretation of each artist. My love for art is not just a question of form or technique, but of emotional connection.

            The beauty I find in the works of Van Gogh and Bernini, as in every other creation, is a beauty that cannot be defined, but that strikes you deeply. It is a pure expression of emotions, thoughts and visions that transcend time and space, taking you to another dimension, where everyday worries vanish and only you remain, immersed in the beauty that surrounds you. Every exhibition I visit is a new opportunity to relax, to nourish my soul and to discover, once again, how important it is to stop and observe.`
        : id ;

    // Filter and classify assets by type
    const assetList = Object.entries(assets)
        .filter(([path]) => path.includes(`/assets/Journal/${id}/`))
        .map(([path, url]) => {
            const filename = path.split('/').pop();
            const ext = filename.split('.').pop().toLowerCase();
            const type = ext === 'mp4' ? 'video' : 'image';
            return { filename, url, type };
        });
    // Prendi il primo asset per farlo "galleggiare"
    const leadAsset = assetList.find(a => a.type === 'image');
    const remaining = assetList.filter(a => a !== leadAsset);

    return (
        <Container className="journal-item py-4">
            <h2 className="journal-title">{name}</h2>
            <hr />

            <Row>
                <Col>
                    {/* Immagine principale flottante */}
                    {leadAsset && (
                        <img
                            src={leadAsset.url}
                            alt={leadAsset.filename}
                            className="journal-lead-img"
                        />
                    )}

                    {/* Descrizione con wrapping */}
                    <p className="journal-description">
                        {description}
                    </p>

                    {/* Altri asset sotto al testo */}
                    <Row>
                        {remaining.length > 0
                            ? remaining.map(({ filename, url, type }) => (
                                <Col lg={6} key={filename} className="media-col mb-4">
                                    <div className="media-wrapper">
                                        {type === 'image' ? (
                                            <img
                                                src={url}
                                                alt={filename}
                                                className="media-item"
                                            />
                                        ) : (
                                            <video
                                                src={url}
                                                controls
                                                preload="metadata"
                                                className="media-item"
                                            />
                                        )}
                                    </div>
                                </Col>
                            ))
                            : <div className="text-muted">Nessun contenuto aggiuntivo</div>
                        }
                    </Row>

                </Col>
            </Row>
        </Container>
    );
}

export default JournalItem;