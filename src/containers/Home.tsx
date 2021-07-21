import React from "react";
import Projects from "../components/Projects";
import OpenSource from "../components/OpenSource";
import SectionHeader from "../components/SectionHeader";

export default function Home() {
    return (
        <main>
            <div className="container intro fadeInDown">
                <SectionHeader
                    title="Design engineer, product hunter, indie maker, and coffee addict."
                    description="Currently getting up in the morning to design, and engineer the new  + fun generation of productivity platforms at Amie. Always designing and building something new."
                    titleStyle={{ maxWidth: 960 }}
                    descriptionStyle={{ maxWidth: 920 }}
                />
            </div>
            <Projects />
            <OpenSource />
        </main>
    );
}
