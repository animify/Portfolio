import React from 'react';

const About = () => (
    <main className="container about">
        <div className="main">
            <h1>Who am I?</h1>
            <h3>
                Hi, I'm Stefan, a 23 year old Software Engineer based in Cyprus. I currently work at Overflow where I'm engineering the next
                generation user flow platform for designers.
            </h3>
            <h3>
                In my spare time, I primarily focus on UX/UI design. Having no formal education in design, studying tons of resources and
                projects over the past few years have given me an edge when starting new projects or jumping in to more complex projects.
            </h3>
            <h3>
                Stay hungry. Stay foolish.{' '}
                <span role="img" aria-label="dance">
                    💃
                </span>
            </h3>
        </div>
        <div className="mentions">
            <h2>Mentions on the internet</h2>
            <a target="_blank" href="https://www.producthunt.com/posts/overflow" rel="noreferrer noopener">
                Product Hunt Maker 2018<span>Overflow</span>
            </a>
            <a target="_blank" href="https://www.invisionapp.com/inside-design/color-palettes/" rel="noreferrer noopener">
                InVision Blog 2017<span>Colorbook</span>
            </a>
            <a target="_blank" href="https://www.producthunt.com/posts/the-colorbook" rel="noreferrer noopener">
                Product Hunt Maker 2017<span>Colorbook</span>
            </a>
        </div>
    </main>
);

export default About;
