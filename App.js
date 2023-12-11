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

import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 tabIndex="0">Namaste react using React</h1>

//  React functional component

const HeadingComponent = () => {
    return <div>
        {title}
        <Title />
        <h1>Namaste react functional component</h1>
    </div>
}
const title = (
    <h1 className="head">
        Namaste React title Element
    </h1>
)

const Title = () => (
    <h1 className="head">
        Namaste React title
    </h1>
)
//const Heading2 = () => <h1>Namaste react functional component</h1>;

//Heading and Heading2 syntax are same 
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(heading);
root.render(<HeadingComponent />); 