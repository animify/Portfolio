import React, { Component } from "react";
import SideProject from "./components/SideProject";
import Project from "./components/Project";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <div className="main">
            <h1>
              Indie maker, coffee drinker, traveler, pixel admirer &amp;
              labrador owner.
            </h1>
            <h3>
              Currently getting up in the morning to engineer the future of user
              flows at Overflow. Always working on designing &amp; building
              something new.
            </h3>
          </div>
          <div className="content">
            <div className="info">
              <h2>Digital works</h2>
              <h3>A couple things I've made.</h3>
            </div>
            <div className="projects">
              <Project
                header="The Colorbook"
                desc="A timeline of the trendiest color palettes from Dribbble, as seen on Product Hunt."
                url="https://colorbook.me"
                urlText="Self started — colorbook.me"
                image="colorbook"
              />
              <Project
                header="Minicons"
                desc="Minicons are a charming, open-source SVG iconset, embeddable with Javascript."
                url="https://minicons.netlify.com"
                urlText="Self started — minicons.xyz"
                image="minicons"
              />
              <Project
                header="Blossom"
                desc="A building block system for the modern web."
                url="https://getblossom.io"
                urlText="Self started — getblossom.io"
                image="blossom"
              />
              <Project
                header="Unload"
                desc="A transitory code sharing platform for developers to distribute snippets rapidly."
                url="http://unload.io"
                urlText="Self started — unload.io"
                image="unload"
              />
              <Project
                header="Kiteshare"
                desc="Kiteshare is a screen capturing desktop tool for users to capture &amp; share moments in seconds."
                url="http://kiteshare.io"
                urlText="Self started — kiteshare.io"
                image="kiteshare"
              />
              <Project
                header="Slant.tv"
                desc="Slant makes searching for a movie or tv-series information effortless, powered by OMDB."
                url="https://slant.netlify.com/"
                urlText="Self started — slant.netlify.com"
                image="slant"
              />
            </div>
            <div className="info">
              <h2>Side projects</h2>
              <h3>Open source tools I've worked on.</h3>
            </div>
            <div className="projects">
              <SideProject
                date="Sep 2018"
                header="Switcher"
                desc="A super simple and modern way to change between dark &amp; light themes on sites, powered by CSS4 variables and JS."
                url="https://github.com/animify/Switcher"
                tags={["CSS4", "Javascript"]}
              />
              <SideProject
                date="Sep 2017"
                header="Webpack, React, Express"
                desc="A basic Webpack, React and Express boilerplate to get a quick client &amp; server project up and running."
                url="https://github.com/animify/webpack-react-express"
                tags={["Webpack", "React", "Express"]}
              />
              <SideProject
                date="May 2017"
                header="Darken.io"
                desc="Content delivery network for Cindr.io and associated platforms, using the fastest content distribution methods available."
                url="https://github.com/humanstack/Darken"
                tags={["Route 53", "Gulp"]}
              />
              <SideProject
                date="Apr 2017"
                header="Blossom boilerplate"
                desc="Set up static websites styled by Stylus, templated by PugJS and utilizing Browser Sync and Gulp for development."
                url="https://github.com/animify/blossom-boilerplate"
                tags={["Pug", "Gulp", "Stylus"]}
              />
            </div>
            <a className="button grey full" target="_blank" href="https://github.com/animify?tab=repositories" rel="noreferrer noopener">Explore all repositories</a>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
