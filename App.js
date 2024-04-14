const parent = React.createElement(
    "div", {id: "parent"}, 
    [React.createElement("div", {id: "child1"}, [
         React.createElement("h1", {id: "heading"}, "I'm an h1 tag"),
         React.createElement("h2", {}, "I'm an h2 tag")
        ]
    ),
    React.createElement("div", {id: "child2"}, [
         React.createElement("h1", {id: "heading"}, "I'm an h1 tag"),
         React.createElement("h2", {}, "I'm an h2 tag")
        ]
    )
    ]
)

// const heading = React.createElement(
//     "h1", 
//     {id: "heading"}, // attributes of the object
//      "Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent); //ReactElement(Object) => HTML(Browser Understands)