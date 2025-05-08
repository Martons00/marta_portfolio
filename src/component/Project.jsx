import React from 'react';
import { useParams } from 'react-router-dom';
import './CSS/Project.css';

// Accede a tutti i file in assets/... con URL come default export
const assets = import.meta.glob('../assets/*/*.{png,jpg,jpeg,svg,gif,mp4}', {
    eager: true,
    as: 'url'
});

function Project() {
    const { id } = useParams();
    const name = id === '01' ? 'Rei Co-op' : id === '02' ? 'InColors' : id === '03' ? 'Spacemotion' : id === '04' ? 'Trive' : id;


    const assetList = Object.entries(assets)
        .filter(([path]) => path.includes(`/assets/${id}/`))
        .map(([path, url]) => {
            const name = path.split('/').pop();
            const ext = name.split('.').pop().toLowerCase();
            const type = ext === 'mp4' ? 'video' : 'image';
            return { name, url, type };
        });

    return (
        <div className="program-icons-container">
            <div className="program-title">{name}</div>
            <div className="program-icons-list-vertical">
                {assetList.length > 0 ? (
                    assetList.map(({ name, url, type }) => (
                        <div className="program-icon-item-vertical" key={name}>
                            {type === 'image' ? (
                                <img src={url} alt={name} className="asset-icon" />
                            ) : (
                                <video
                                    src={url}
                                    autoPlay
                                    className="asset-video"
                                    style={{ width: '100%', height: 'auto' }}
                                    preload="metadata"
                                />
                            )}
                        </div>
                    ))
                ) : (
                    <div>Nessun contenuto trovato per {id}</div>
                )}
            </div>

        </div>
    );
}

export default Project;
