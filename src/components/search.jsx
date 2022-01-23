import React, {useState, useEffect} from "react";


const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    console.log('rendered')
  },[])
  return (
    <div>
      <div className="ui form">
        <label htmlFor="search">Enter Search Term</label>
        <input
          type="text"
          id="search"
          className="input"
          value={term}
          onChange={e => setTerm(e.target.value)} />
      </div>
    </div>
  )
}

export default Search
