import React from 'react'
import { render } from 'react-dom'
import Pet from "./Pet"


const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Oni",
      animal: "Dog",
      breed: "Mix",
    }),
    React.createElement(Pet, {
      name: "Lylie",
      animal: "Dog",
      breed: "Akita",
    }),
    React.createElement(Pet, {
      name: "Doggie",
      animal: "Dog",
      breed: "Siberian-Husky",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
