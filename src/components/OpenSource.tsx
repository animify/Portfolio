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
                    Here are a couple of useful tools I've built &amp; released.
                </p>
            </section>

            <div className="container flex-column">
                <ProjectSection title="React Hooks" />
                <OpenSourceProject
                    title="useRestate"
                    description="A React Hook that subscribes your state selector to the store and memoizes your action dispatchers."
                />
                <OpenSourceProject
                    title="useCopy"
                    description="A React Hook that provides an easy API to copy and manage textual data, compatible with all browsers."
                />
                <ProjectSection title="Others" />
                <OpenSourceProject
                    title="Figicons CLI"
                    description="The Figicons CLI provides the right tooling to easily fetch, parse &amp; optimize your Figma-designed icons in minutes."
                />
                <OpenSourceProject
                    title="Switcher"
                    description="The most simple light x dark theme switcher boilerplate for any modern website, using Javascript &amp; CSS variables."
                />
            </div>
        </div>
    );
}
