import React from 'react';
import ProjectSection from './ProjectSection';
import { Icon } from 'figicons';
import OpenSourceProject from './OpenSourceProject';

export default function OpenSource() {
    return (
        <div className="opensource">
            <section className="container flex-column">
                <h3 className="flex items-center">
                    Open source{' '}
                    <div className="flex ml2 heart">
                        <Icon name="heart" strokeWidth={0} fill="red" width={48} height={48} />
                    </div>
                </h3>
                <p className="mt6">
                    We all love open source. Giving back to the community in any way is rewarding.
                    Here are a couple of useful tools I've built and released.
                </p>
            </section>

            <div className="container flex-column">
                <ProjectSection title="React Hooks" />
                <OpenSourceProject
                    title="useRestate"
                    description="A React Hook that subscribes your state selector to the store and memoizes your action dispatchers."
                    url="https://github.com/animify/useRestate"
                />
                <OpenSourceProject
                    title="useCopy"
                    description="A React Hook that provides an easy API to copy and manage textual data, compatible with all browsers."
                    url="https://github.com/animify/useCopy"
                />
                <ProjectSection title="Others" />
                <OpenSourceProject
                    title="Figicons CLI"
                    description="The Figicons CLI provides the right tooling to easily fetch, parse &amp; optimize your Figma-designed icons in minutes."
                    url="https://github.com/Figicons/cli"
                />
                <OpenSourceProject
                    title="Frame CSS"
                    description="A super simple, functional &amp; responsive SCSS utility belt for fast and responsive websites."
                    url="https://github.com/animify/Frame"
                />
                <OpenSourceProject
                    title="Switcher"
                    description="The most simple light x dark theme switcher boilerplate for any modern website, using Javascript &amp; CSS variables."
                    url="https://github.com/animify/switcher"
                />
            </div>
        </div>
    );
}
