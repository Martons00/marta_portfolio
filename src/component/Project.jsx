import React from 'react';
import { useParams } from 'react-router-dom';
import './CSS/Project.css';

// Carica tutte le immagini sotto assets
const images = import.meta.glob('../assets/*/*.{png,jpg,jpeg,svg,gif,mov,mp4}', { eager: true });

function Project() {
    const { id } = useParams();
    const name = id === '01' ? 'Rei Co-op' : id === '02' ? 'InColors' : id === '03' ? 'Spacemotion': id === '04' ? 'Trive' : id;


    // Filtra le immagini della sottocartella corrispondente a id
    const assetList = Object.entries(images)
        .filter(([path]) => path.includes(`/assets/${id}/`))
        .map(([path, module]) => ({
            name: path.split('/').pop(),
            icon: <img src={module.default} alt={path} className="asset-icon" />
        }));
    return (
        <div className="program-icons-container">
            <div className="program-title">{name}</div>
            <div className="program-icons-list-vertical">
                {assetList.length > 0 ? (
                    assetList.map(({ name, icon }) => (
                        <div className="program-icon-item-vertical" key={name}>
                            {icon}
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
