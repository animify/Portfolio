import React from 'react';
import Projects from '../components/Projects';
import OpenSource from '../components/OpenSource';
import SectionHeader from '../components/SectionHeader';

export default function Home() {
    return (
        <main>
            <div className="container intro fadeInDown">
                <SectionHeader
                    title="Indie maker, coffee addict, explorer, pixel shifter &amp; labrador owner."
                    description="Currently getting up in the morning to engineer the next gen of design tools
                at Framer. Always working on designing and building something new."
                    titleStyle={{ maxWidth: 960 }}
                    descriptionStyle={{ maxWidth: 920 }}
                />
            </div>
            <Projects />
            <OpenSource />
        </main>
    );
}
