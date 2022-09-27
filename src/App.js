const Pet = (props) => {
    return (
        React.createElement("div", {}, [
            React.createElement("h1", {}, props.name),
            React.createElement("h2", {}, props.animal),
            React.createElement("h2", {}, props.breed),
        ])
    )
}

const App = () => {
    return React.createElement("div", {}, [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {
                name: "Oni",
                animal: "Dog",
                breed: "Mix"
            }),
            React.createElement(Pet, {
                name: "Lylie",
                animal: "Dog",
                breed: "Akita"
            }),
            React.createElement(Pet, {
                name: "Doggie",
                animal: "Dog",
                breed: "Siberian-Husky"
            }),
        ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));