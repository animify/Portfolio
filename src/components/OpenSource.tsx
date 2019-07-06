import React from 'react';
import ProjectSection from './ProjectSection';
import { Icon } from 'figicons';

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
                    We all love open source. Giving back to the community in any way is something I
                    value greatly. Here are a few smaller tools I've worked on.
                </p>
            </section>
        </div>
    );
}
