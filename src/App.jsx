import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Search from "./components/Search";
import Accordion from "./components/Accordion";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "whatis react1?",
    content: "react is a frontend javascript framework",
  },
  {
    title: "whatis react2?",
    content: "react is a frontend javascript framework",
  },
  {
    title: "whatis react3?",
    content: "react is a frontend javascript framework",
  },
];

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
      <Header />
      <Route path="/">
        {" "}
        <Accordion items={items} />{" "}
      </Route>
      <Route path="/list">
        {" "}
        <Search />
      </Route>
      <Route path="/dropdown">
        {" "}
        <Dropdown
          options={options}
          label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        {" "}
        <Translate />
      </Route>
    </div>
  );
};

export default App;
