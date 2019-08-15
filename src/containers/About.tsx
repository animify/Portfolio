import React from 'react';
import Avatar from '../images/avatar.jpg';
import About1 from '../images/about-1.png';
import About2 from '../images/about-2.png';
import About3 from '../images/about-3.png';
import About4 from '../images/about-4.png';
import Mentions from '../components/Mentions';

export default function About() {
    return (
        <main>
            <section className="about">
                <div className="container justify-between">
                    <div className="short">
                        <h3 className="mb6">About me.</h3>
                        <p>Hello there. My name is Stefan Mansson.</p>
                        <img className="mobileavatar" alt="Avatar" src={Avatar} />
                        <p>
                            I'm a Swedish / Cypriot softare maker with a keen passion for design
                            &amp; development, living in Cyprus.
                        </p>
                        <p>
                            Over the past few years, I've graduated with a BSc in Computer Science
                            from the University of Hull and interned at{' '}
                            <a href="https://ebuyer.com" target="_blank" rel="noopener noreferrer">
                                Ebuyer.com
                            </a>
                            .
                        </p>

                        <p>
                            I currently work at{' '}
                            <a href="https://overflow.io" target="_blank" rel="noopener noreferrer">
                                Overflow
                            </a>
                            , building and developing the worlds first user flow tool tailored for
                            designers.
                        </p>
                    </div>

                    <img src={Avatar} alt="Avatar" />
                </div>

                <div className="container flex-column">
                    <p className="mt6">
                        Apart from tinkering with my own projects daily and keeping up with the
                        latest design &amp; software trends, I usually spend my free time driving to
                        explore new places and travelling to countries I've never been to before.
                        And of course as I'm staying on such a sunny island, you'll likely find me
                        kayaking and at the sea.
                    </p>
                    <div className="images">
                        <img src={About1} alt="About 1" />
                        <img src={About2} alt="About 2" />
                        <img src={About3} alt="About 3" />
                        <img src={About4} alt="About 4" />
                    </div>
                </div>
            </section>

            <section className="container flex-column">
                <h3 className="flex items-center">Mentions</h3>
                <p className="mt6" style={{ maxWidth: 600 }}>
                    I was lucky enough for my work to be recognized by some awesome people around
                    the web.
                </p>
                <Mentions />
            </section>
        </main>
    );
}
