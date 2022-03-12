import React from 'react';
import classes from './Quote.module.scss';

const Quote = (props) => {
  const tweetQuote = `https://twitter.com/intent/tweet?hashtags=quotes&text=${props.quote}%20-${props.author}`;
  return (
    <div className={classes.Quote}>
      <div className={classes.QuoteText}>
        <p id='text' className={classes.Text} style={props.textColorStyle}>
          <i className='fas fa-quote-left'></i>
          {props.quote}
        </p>
        <p id='author' className={classes.Author} style={props.textColorStyle}>
          - {props.author}
        </p>
      </div>
      <div className={classes.Buttons}>
        <div className={classes.SocialButtons}>
          <a id='tweet-quote' style={props.bgColorStyle} href={tweetQuote}>
            <i className='fab fa-twitter'></i>
          </a>
          <a style={props.bgColorStyle} href='https://twitter.com/intent/tweet'>
            <i className='fab fa-tumblr'></i>
          </a>
        </div>
        <div className={classes.NewQuoteButton}>
          <button
            id='new-quote'
            onClick={props.initColors}
            style={props.bgColorStyle}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quote;
