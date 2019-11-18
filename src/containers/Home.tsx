import React from 'react';
import Projects from '../components/Projects';
import OpenSource from '../components/OpenSource';
import SectionHeader from '../components/SectionHeader';

export default function Home() {
    return (
        <main>
            <div className="container intro fadeInDown">
                <SectionHeader
                    title="Indie maker, coffee addict, traveller, pixel admirer &amp; labrador owner."
                    description="Currently getting up in the morning to engineer the next gen of design tools
                at Framer. Always working on designing and building something new."
                    titleStyle={{ maxWidth: 800 }}
                    descriptionStyle={{ maxWidth: 800 }}
                />
            </div>
            <Projects />
            <OpenSource />
        </main>
    );
}
