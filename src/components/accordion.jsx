import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    index === activeIndex ? setActiveIndex(null) : setActiveIndex(index);
  };

  const renderedItems = items.map((item, i) => {
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${i === activeIndex ? 'active' : ''}`}
          onClick={() => onTitleClick(i)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${i === activeIndex ? 'active' : ''}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
  <div className="ui styled accordion">
    {renderedItems}
  </div>);
};

export default Accordion;
