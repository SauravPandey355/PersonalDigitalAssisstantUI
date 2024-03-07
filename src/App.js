import React from 'react';
import ProfileCard from './ProfileCard';
import AlexaImg from './images/alexa.png';
import CortanaImg from './images/cortana.png';
import SiriImg from './images/siri.png';
import 'bulma/css/bulma.css';
export default function App(){
    return(
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                <h1 className='title'>Personal Digital Assisstant</h1>
                </div>
            </section>
            <div className='container'>
                <div className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard title="Alexa" handle="alexa99" image={AlexaImg} description="Amazon created Alexa"/>
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title="Cortana" handle="cortana" image={CortanaImg} description="Microsoft created cortana"/>
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title="Siri" handle="siri69" image={SiriImg} description="Apple created siri"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}