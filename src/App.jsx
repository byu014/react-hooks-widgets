import React, {useState} from "react";
import Accordion from "./components/accordion";
import Search from "./components/search";
import Dropdown from "./components/dropdown"
import Translate from "./components/translate";
import Route from "./components/route";
import Header from "./components/header";

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

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
]

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/" >
        <Accordion items={items}/>
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown options={options} onSelectedChange={setSelected} selected={selected} label={'Select a color'}/>
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
