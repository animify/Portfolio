import React from "react";
import Avatar from "../images/avatar.jpg";
import About1 from "../images/about-1.png";
import About2 from "../images/about-2.png";
import About3 from "../images/about-3.png";
import About4 from "../images/about-4.png";
import Mention from "../components/Mention";
import SectionHeader from "../components/SectionHeader";

export default function About() {
    return (
        <main>
            <section className="about">
                <div className="container justify-between">
                    <div className="short fadeInDown">
                        <SectionHeader title="Hey, I'm Stefan." />

                        <img
                            className="mobileavatar"
                            alt="Avatar"
                            src={Avatar}
                        />
                        <p>
                            I'm a software maker with a keen
                            passion for design &amp; development, now working
                            remotely.
                        </p>
                        <p>
                            Over the past few years, I graduated with a BSc in
                            Computer Science from the University of Hull,
                            interned at{" "}
                            <a
                                href="https://ebuyer.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ebuyer.com
                            </a>{" "}
                            and engineered the worlds finest design tools at{" "}
                            <a
                                href="https://overflow.io"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Overflow
                            </a>{" "}
                            and{" "}
                            <a
                                href="https://framer.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Framer
                            </a>
                            .
                        </p>

                        <p>
                            I currently work as a Design Engineer at{" "}
                            <a
                                href="https://amie.so"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Amie
                            </a>
                            , designing and pixel perfecting the next generation
                            of productivity apps.
                        </p>
                    </div>

                    <img className="fadeInUp" src={Avatar} alt="Avatar" />
                </div>

                <div className="container flex-column mt6 fadeInDown">
                    <p>
                        Apart from tinkering with my own projects daily and
                        keeping up with the latest design &amp; software trends,
                        I usually spend my free time driving to explore new
                        places and travelling to countries I've never been to
                        before. And of course as I'm staying on such a sunny
                        island, you'll likely find me kayaking and at the sea.
                    </p>
                </div>

                <div className="container flex-column mt12 fadeInUp">
                    <div className="images">
                        <img src={About1} alt="About 1" />
                        <img src={About2} alt="About 2" />
                        <img src={About3} alt="About 3" />
                        <img src={About4} alt="About 4" />
                    </div>
                </div>
            </section>

            <section className="container flex-column fadeInDown">
                <SectionHeader
                    title="Mentions"
                    description="I was lucky enough for my work to be seen &amp; recognized by some awesome
                    people around the web."
                    descriptionStyle={{ maxWidth: 600 }}
                />

                <Mention
                    platform="Product Hunt"
                    year="2020"
                    product="Framer Web"
                    url="https://www.producthunt.com/posts/framer-for-web"
                />

                <Mention
                    platform="Product Hunt"
                    year="2018"
                    product="Overflow"
                    url="https://www.producthunt.com/posts/overflow"
                />
                <Mention
                    platform="Product Hunt"
                    year="2017"
                    product="The Colorbook"
                    url="https://www.producthunt.com/posts/the-colorbook"
                />
                <Mention
                    platform="InVision Blog"
                    year="2017"
                    product="The Colorbook"
                    url="https://www.invisionapp.com/inside-design/color-palettes"
                />
            </section>
        </main>
    );
}
