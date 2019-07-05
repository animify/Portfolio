import React from 'react';
import Project from './Project';
import ProjectSection from './ProjectSection';

export default function Projects() {
    return (
        <div className="container flex-column">
            <ProjectSection title="Professional work" className="mb6" />
            <Project
                title="Overflow"
                description="Beautiful, customizable SVG icons, based on a 24px grid. 
Completely open source, MIT licensed and designed in Figma."
                mode="dark"
                project="overflow"
            />

            <ProjectSection title="Self-made work" className="mb6 mt12" />
            <Project
                title="Figicons"
                description="Beautiful, customizable React SVG icons, based on a 24px grid. Completely open source, MIT licensed and designed in Figma."
                mode="light"
                project="figicons"
            />
            <Project
                title="The Colorbook"
                description="A timeline of the trendiest color palettes from Dribbble, as seen on Product Hunt."
                mode="light"
                project="colorbook"
            />
            <Project
                title="Frame CSS"
                description="Create fast, readable and performant websites using a super simple, functional &amp; responsive SCSS utility belt."
                mode="dark"
                project="framecss"
            />
            <Project
                title="Minicons"
                description="Over 85+ aesthetic SVG icons designed on a 24x24 grid, swapped dynamically or using the JS API."
                mode="light"
                project="minicons"
            />
            <Project
                title="Blossom"
                description="A simply beautiful, themeable design framework built from the ground up in Stylus with performance in mind."
                mode="light"
                project="blossom"
            />
        </div>
    );
}