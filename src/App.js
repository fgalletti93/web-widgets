import React from "react";
import Search from "./components/Search";
//import Accordion from "./components/Accordion";

const items = [
    {
        title: 'whatis react1?',
        content: 'react is a frontend javascript framework'
    },
    {
        title: 'whatis react2?',
        content: 'react is a frontend javascript framework'
    },
    {
        title: 'whatis react3?',
        content: 'react is a frontend javascript framework'
    }
]

const App = () => {
  return (
    <div><Search /></div>
    );
};

export default App;
