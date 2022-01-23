import React from "react";
import Accordion from "./components/accordion";
import Search from "./components/search";

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title:'how do you use React',
    content: 'You use react by creating components'
  }
]

const App = () => {
  return (
    <div>
      {/* <Accordion items={items}/> */}
      <Search />
    </div>
  );
}

export default App;