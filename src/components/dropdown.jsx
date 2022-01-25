import React, {useState, useEffect, useRef} from "react";

const Dropdown = ({options, selected, onSelectedChange, label}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const bodyClick = (event) => {
      if(!ref.current.contains(event.target)) setOpen(false)
    }
    document.body.addEventListener('click', bodyClick)

    return () => {
      document.body.removeEventListener(bodyClick);
    }
  }, [])
  const renderedOptions = options.map((option => {
    if(selected === option)return null;
    return (
      <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
        {option.label}
      </div>
    );
  }))

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label htmlFor="" className="label">{label}</label>
        <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''} `}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;
