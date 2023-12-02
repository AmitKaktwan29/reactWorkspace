/**
 * <div id="parent">
 *  <div id="child">
 *      <h1>This is H1 tag </h1>
 *      <h2>This the h2 tag </h2>
 *  </div>
 * <div id="child2">
 *      <h1>This is H1 tag </h1>
 *      <h2>This the h2 tag </h2>
 *  </div>
 * </div>
 */
const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "This is H1 tag"), React.createElement("h2", {}, "This is H2 tag")]));
const heading = React.createElement("h1", { id: "heading" }, "This is from react");
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(parent);
root.render(parent); 