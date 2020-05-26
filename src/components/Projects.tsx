import React from 'react';
import Project from './Project';
import Splitter from './Splitter';
import ImageOverflow from '../images/project-overflow.png';
import ImageColorbook from '../images/project-colorbook.png';
import ImageBlossom from '../images/project-blossom.png';
import ImageCarpo from '../images/project-carpo.svg';
import ImageFigicons from '../images/project-figicons.png';
import ImageMinicons from '../images/project-minicons.png';
import ImageCampfire from '../images/project-campfire.png';
import ImageFramer from '../images/project-framer.png';

export default function Projects() {
    return (
        <section className="container flex-column fadeInUp">
            <Splitter title="Professional work" className="mb6" />
            <Project
                title="Framer"
                description="The best prototyping tool for teams, empowering designers &amp; developers to create immsersive prototypes with no code."
                mode="light"
                project="framer"
                image={ImageFramer}
                url="https://framer.com"
                product={true}
            />
            <Project
                title="Overflow"
                description="The worlds first user flow diagramming tool tailored for designers, integrating with Figma, Sketch &amp; Adobe XD."
                mode="dark"
                project="overflow"
                image={ImageOverflow}
                url="https://overflow.io"
                product={true}
            />
            <Project
                title="Carpo"
                description="The first fully featured design system, created for the Overflow ecosystem."
                mode="light"
                project="carpo"
                image={ImageCarpo}
                isPrivate={true}
                product={true}
            />

            <Splitter title="Self&mdash;made work" className="mv6 pt12" />

            <Project
                title="Campfire"
                description="Get started by creating a party and sharing with friends to add and seemlessly watch videos on YouTube together."
                mode="light"
                project="campfire"
                image={ImageCampfire}
                url="https://campfire.gg"
            />
            <Project
                title="Figicons"
                description="Beautiful, customizable React SVG icons, based on a 24px grid. Completely open source and designed in Figma."
                mode="light"
                project="figicons"
                image={ImageFigicons}
                url="https://github.com/Figicons/Figicons"
            />
            <Project
                title="The Colorbook"
                description="A timeline of the trendiest color palettes from Dribbble, as seen on Product Hunt."
                mode="dark"
                project="colorbook"
                image={ImageColorbook}
                url="https://github.com/animify/colorbook"
            />
            <Project
                title="Minicons"
                description="Over 85+ aesthetic SVG icons designed on a 24x24 grid, swapped dynamically via observers or programmatically the API."
                mode="light"
                project="minicons"
                image={ImageMinicons}
                url="https://github.com/animify/Minicons"
            />
            <Project
                title="Blossom UI"
                description="A simply beautiful, themeable design framework built with Stylus."
                mode="light"
                project="blossom"
                image={ImageBlossom}
                url="https://github.com/humanstack/Blossom"
            />
        </section>
    );
}
