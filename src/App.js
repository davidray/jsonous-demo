import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import things from "./things";
import {
  array,
  field,
  string,
  number,
  succeed
  // boolean
} from "jsonous";

const payloadDecoder = decoder => field("payload", decoder);

// prettier-ignore
const simpleBikeDecoder =
  field('owner', string).andThen(owner =>
  field('top_speed', number).andThen(topSpeed =>
  field('links', array(linkDecoder)).andThen(links =>
  succeed({
    owner,
    topSpeed,
    links
  }))))

// prettier-ignore
const linkDecoder =
  field('href', string).andThen(href =>
  field('rel', string).andThen(rel =>
  succeed({
    href,
    rel
  })))

const structuredBikeDecoder = payloadDecoder(simpleBikeDecoder);

const structuredBikesDecoder = payloadDecoder(array(structuredBikeDecoder));

class App extends Component {
  render() {
    return structuredBikesDecoder.decodeAny(things).cata({
      Ok: bikes =>
        <div className="App">
          <h1>Jsonous All the Things</h1>
          <ul>
            {bikes.map(bike =>
              <li key={bike.owner}>
                {bike.owner}
                <ul>
                  <li>
                    Top Speed: {bike.topSpeed}
                  </li>
                  <li>
                    Links
                    <ul>
                      {bike.links.map(link =>
                        <li key={link.rel}>
                          {link.rel}:{link.href}
                        </li>
                      )}
                    </ul>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>,
      Err: e =>
        <div className="App">
          <h1>OH SNAP!</h1>
          <p>
            {e}
          </p>
        </div>
    });
  }
}

export default App;
