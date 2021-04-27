import React, { useState, useEffect } from 'react';
import Select from "react-select";
import { genArtists } from "../utils/data-transform";
import Bubbles from '../Bubbles.js';
import "../App.css";

const customStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: "var(--dark)",
    color: "var(--light-text)",
    border: "none",
    borderRadius: "0",
    borderBottom: "2px solid var(--light-green)",
    boxShadow: "none",
    "&:hover": {
      borderBottom: "2px solid var(--blue)",
    },
  }),
  placeholder: (base) => ({
    ...base,
    backgroundColor: "var(--dark)",
    color: "var(--dark-text)",
  }),
  singleValue: (base) => ({
    ...base,
    color: "var(--light-text)",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "var(--light-green)",
    "&:hover": {
      color: "var(--blue)",
    },
  }),
  input: (base) => ({
    ...base,
    color: "var(--light-text)",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "var(--dark)",
    color: "var(--light-text)",
  }),
  option: (base, state) => ({
    ...base,
    fontSize: "16px",
    color: "var(--light-text)",
    backgroundColor: state.isSelected
      ? "var(--blue)"
      : state.isFocused
      ? "var(--dark-green)"
      : "var(--dark)",
  }),
};


const BubbleStep = ({shouldFocus}) => {

  const [songOrArtist, setSongOrArtist] = useState(null);
  const [artists, setArtists] = useState([]);
  const [showCensored, setShowCensored] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const artistRes = await genArtists();
      setArtists(artistRes);
    };
    fetchData();
  }, []);

  const toggleCensoredCheckbox = () => {
    setShowCensored(!showCensored);
  }

  return (
    <div>
      <div className="App-escape">press ESC to zoom out</div>
      <div className="App-header">
        What's
        <Select
          className="App-select"
          autoFocus={shouldFocus}
          placeholder="your favorite artist"
          options={[...artists]}
          value={songOrArtist}
          onChange={setSongOrArtist}
          styles={customStyles}
        />
        spitting?
      </div>
      <div className='App-checkbox'>
        <input type='checkbox' id='showCensored' checked={showCensored} onChange={toggleCensoredCheckbox}></input>
        <label htmlFor='showCensored'>Show Censored Songs</label>
      </div>
      <div className="App-header">
        <Bubbles shouldFocus={shouldFocus} songOrArtist={songOrArtist} setSongOrArtist={setSongOrArtist} showCensored={showCensored} />
      </div>
      <div className="App-data">data from The Pudding (https://github.com/the-pudding/data/tree/master/kidz-bop)</div>
    </div>
  );

}

export default BubbleStep