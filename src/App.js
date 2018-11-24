import React, { Component } from "react";
import SideProject from "./components/SideProject";
import Project from "./components/Project";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="waves">
          <div class="wave" />
          <div class="wave two" />
          <div class="wave three" />
        </div>
        <header>
          <nav>
            <div className="logo">Stefan Mansson</div>
            <div>
              <a>About</a>
              <a>Email</a>
            </div>
          </nav>
        </header>
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
                url="https://minicons.io"
                urlText="Self started — minicons.io"
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
                url="http://slant.tv"
                urlText="Self started — slant.tv"
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
            <div className="button grey full">Explore all repositories</div>
          </div>
        </main>
        <footer className="container">
          <div className="social">
            <a href="https://dribbble.com/animify">Dribbble</a>
            <a href="https://twitter.com/_animify">Twitter</a>
            <a href="https://github.com/animify">Github</a>
            <a href="https://www.linkedin.com/in/smansson/">LinkedIn</a>
          </div>
          <p>
            Built &amp; designed with &nbsp;
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </p>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
