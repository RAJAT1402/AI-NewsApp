import { Typography } from '@material-ui/core';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles';

import React, { useState, useEffect } from 'react';
import Header from './components/NavBar/Header'
import Footer from './components/Footer/Footer';

const App = () => {
  const [activeArticle, setActiveArticle] = useState(-1);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: 'fc6b27a5f22989778eda527ef787b2ea2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === 'instructions') {
          setIsOpen(true);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if(command === 'unhighlight'){
          setActiveArticle(-1);
          console.log("unhighlight")
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      },
    });
  }, []);

  return (
    <div>
        <Header setNewsArticles={setNewsArticles}></Header>
      <div className={classes.logoContainer}>
        {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}><Typography variant="h5" component="h2">Play with commands:</Typography></div>
            <div className={classes.card}><Typography variant="h5" component="h2">Open article number [4]</Typography></div>
            <div className={classes.card}><Typography variant="h5" component="h2">Go back</Typography></div>
          </div>
        ) : null}
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      <Footer />
      {/* <Card/> */}
      {/* <Modal isOpen={false} setIsOpen={setIsOpen} showFeedback={true}/> */}
    </div>
  );
};

export default App;
