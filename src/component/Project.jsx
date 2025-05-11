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
    const name = id === '01' ? 'Rei Co-op' : id === '02' ? 'InColors' : id === '03' ? 'Spacemotion' : id === '04' ? 'Trive' : id === '05' ? 'Trive: Design Documentation' : id;
    const description = id === '01'
        ? 'Rei Co-op'
        : id === '02'
            ? `
An app that helps children affected by colorblindness learning colors. Color blindness is a hereditary condition in which a person has difficulty distinguishing or perceiving certain colors. It is usually caused by a genetic defect in the cones, the cells responsible for color vision in the eye.

Children with color blindness may encounter several problems and challenges related to their color perception. Here are some significant aspects:

Difficulty in color discrimination: Children with color blindness may have difficulty distinguishing specific colors or recognizing differences between them. For example, they may have trouble distinguishing between red and green or between blue and purple.

Learning difficulties: Because many teaching materials rely on color recognition, children with color blindness may have difficulty learning certain activities. For example, they may have difficulty completing exercises that require color recognition or using specific color schemes during artistic activities.`
            : id === '03'
                ? `A game that provides children a way to develop the ability to recognize, communicate and manage their emotions, by playing with emotions children can take it as a challenge and develop emotional intelligence.

Every story has a protagonist, our main character is Orbit the astronaut
He was on a mission in space, light years from earth, and one day he lost all his emotions, without them, he couldn’t come back home.
It is a common problem even for astronauts, sometimes it is hard to know what we are feeling, emotions overwhelm us and we don’t know how to name what happens.

But who can help our Orbit better than someone who knows this confusion perfectly well?
Together with orbit, children from 4 years old can become aware of emotions and learn how to identify and manage them.`
                : id === '04'
                    ? `Trive is an app that helps women who want to keep track of their contraceptive by sending them notification and to keep under control of their progress. 

Trive was born from in-depth research on the female target, in particular their relationship with the menstrual cycle. Studying this target it has emerged that many women who take contraceptives do not have an instrument made for their needs, but rather they are the ones who are forced to adapt to the instruments created for the menstrual cycle.
It is from this need that Trive was born, a tool that allows women to keep track of their contraceptive and related progress.The app is made up of two main views: the first is the Trackers in which the user can view the progress of the contraceptive she has taken, and in addition she can create personalized trackers based on the purpose for which she takes the contraceptive (acne, polycystic ovary, cysts, hormonal pathologies, etc.), in order to keep track of all events. In the second view we have the classic Calendar section in which it is possible to write down information about the menstrual cycle, the intake of contraceptives on the current day, and in addition we have a notes section in which it is possible to record phenomena that the user is experiencing to live on that day with attached tags (these report the most frequent events deriving from a study with specialists in the sector, such as gynecologists).

Trive is a native iOS application and those are the framework that we used for building it.
We used combine to manage the concurrency between threads and the asynchronous events. SwiftUI for the front end. User notifications and UIKit to build our complex notification system and to customize the notification actions. Activity kit to build our amazing live activities. Core Data to store user notes and pill assumption. Of course the entire app design follows the apple human interface guidelines.`
                    : id === '05'
                        ? 'Trive: Design Documentation'
                        : id;


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
            <div className="program-description">{description}</div>
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
