// import { SwipeableDrawer } from '@mui/material';
import React, {useEffect, useState} from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from './axios.js';
// import data from '../server.js';

function TinderCards() {
    // Array is still present because Axios fails to apply card data submitted via POST and GET requests.
    const [people, setPeople] = useState([
        {
            name: 'Emperor Palpatine',
            url: "https://miro.medium.com/focal/1200/900/49/24/1*Y5rO0iWHQFd8gUd_WuFpqg.jpeg",
            alt: 'profile picture of emperor palpatine'
        },

        {
            name: 'Trickle',
            url: "https://pbs.twimg.com/profile_images/1528749967979925504/N6ixPoa1_400x400.jpg",
            alt: 'profile picture of youtube singercd '
        },

        {
            name: 'Shadow the Hedgehog',
            url: "https://i.pinimg.com/originals/52/87/10/5287104b52cd3925c96ba6bfe12d0416.jpg",
            alt: 'profile picture of shadow the hedgehog'
        },

        {
            name: 'Flynn Rider',
            url: "https://media.discordapp.net/attachments/802616961313406986/989243101681950821/IMG_7818.jpg",
            alt: 'profile picture of flynn rider'
        },

        {
            name: 'Jeffery Bezos',
            url: "https://www.biography.com/.image/t_share/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg",
            alt: 'profile picture of jeff bezos'
        }

    ]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');

            setPeople(req.data);
        }
            
        fetchData();
        }, []
    );

    console.log(people);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!  Too bad');
    };

    return (
        <div className='tinder-cards'>
            <div className='tinder-cards-container'>
                {people.map((person) => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{ backgroundImage: `url(${person.url})`}} className='card'>
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards;