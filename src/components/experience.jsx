import React, { Component } from 'react';
import '../styles.css';

function experience() {
    return(
        <div>
            <h3>PROFESSIONAL EXPERIENCE</h3>
            <div className='work1'> 
                <section className='work1-left'> 
                    <h3>Labello Beauty | London, United Kingdom</h3>
                    <p>Social Media Manager & Customer Servcie Representative</p>
                    <ul>
                        <li>Content creation on social media platform.</li>
                        <li>Daily posting on social media.</li>
                        <li>Replying customer's messages.</li>
                        <li>Work with influencers worldwide.</li>
                        <li>Create weekly report on influencers.</li>
                        <li>Ship and track PR packages.</li>
                    </ul>
                </section>
                <section className='work1-right'>
                    May'19 - Sep'20
                </section>
            </div>
            <div className='work2'>
                <section className='work2-left'> 
                    <h3>Stutern | Lagos, Nigeria</h3>
                    <p>Data Entry(Remote)</p>
                    <ul>
                        <li>Compiling, verifying and sorting information.</li>
                        <li>Entering data into online forms.</li>
                        <li>Resolving discrepancies in information.</li>
                        <li>Surfing the internet to find additional information.</li>
                    </ul>
                </section>
                <section className='work2-right'>
                    Oct'20
                </section>
            </div>
        </div>
    )
}

export default experience;