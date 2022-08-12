import React, { useState } from "react";
import Dropdown from "./components/dropdown";
//import Search from "./components/Search";
//import Accordion from "./components/Accordion";

// const items = [
//     {
//         title: 'whatis react1?',
//         content: 'react is a frontend javascript framework'
//     },
//     {
//         title: 'whatis react2?',
//         content: 'react is a frontend javascript framework'
//     },
//     {
//         title: 'whatis react3?',
//         content: 'react is a frontend javascript framework'
//     }
// ]

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown
        onSelectedChange={setSelected}
        selected={selected}
        options={options}
      />
    </div>
  );
};

export default App;
