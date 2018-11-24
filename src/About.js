import React from "react";

const About = () => (
  <main className="container about">
    <div className="main">
      <h1>A small briefing</h1>
      <h3>
        I'm Stefan, a 23 year old Software Engineer based out of Nicosia, Cyprus. I currently work at Overflow where I'm engineering the next generation user flow diagramming platform for designers.
      </h3>
      <h3>In my spare time, I primarily focus on UI/UX design. Having no formal design education, I've been studying tons of resources and projects over the past few years that gives me an edge when starting new projects or jumping in to more complex projects.</h3>
      <h3>Good engineering is tough. Great engineering is invisible. Same goes for design. </h3>
    </div>
    <div className="mentions">
      <h2>Mentions around the interwebs</h2>
      <a target="_blank" href="https://www.producthunt.com/posts/overflow" rel="noreferrer noopener">Product Hunt Maker <span>Overflow</span></a>
      <a target="_blank" href="https://www.invisionapp.com/inside-design/color-palettes/" rel="noreferrer noopener">InVision Blog <span>Colorbook</span></a>
      <a target="_blank" href="https://www.producthunt.com/posts/the-colorbook" rel="noreferrer noopener">Product Hunt Maker <span>Colorbook</span></a>
    </div>
  </main>
)

export default About;