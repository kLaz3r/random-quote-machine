import classes from './App.module.scss';
import Quote from './components/Quote/Quote';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [uiColor, setUiColor] = useState('');
  const [quotes, setQuotes] = useState({});
  const [currentQuote, setCurrentQuote] = useState({});
  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857',
  ];
  useEffect(() => {
    axios
      .get(
        'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
      )
      .then((res) => {
        setQuotes(res.data.quotes);
        initColors();
        randomQuote(res.data.quotes);
      });
    // eslint-disable-next-line
  }, []);
  const newQuoteButtonHandler = () => {
    randomQuote(quotes);
    initColors();
  };
  const initColors = () => {
    setUiColor(colors[Math.floor(Math.random() * (11 - 0)) + 0]);
  };
  const randomQuote = (inQuotes) => {
    setCurrentQuote(inQuotes[Math.floor(Math.random() * (101 - 0)) + 0]);
  };
  const textColorStyle = {
    color: uiColor,
    transition: 'color 1s ease-in-out',
  };
  const bgColorStyle = {
    backgroundColor: uiColor,
    transition: 'background-color 1s ease-in-out',
  };
  console.log(currentQuote);
  return (
    <div id='quote-box' className={classes.App} style={bgColorStyle}>
      <Quote
        quote={currentQuote.quote}
        author={currentQuote.author}
        initColors={newQuoteButtonHandler}
        textColorStyle={textColorStyle}
        bgColorStyle={bgColorStyle}
      ></Quote>
      <small className={classes.Eu}>by stefan</small>
    </div>
  );
}

export default App;
