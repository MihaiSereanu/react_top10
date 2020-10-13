import React from 'react';
import RedditHeadlines from './components/RedditHeadlines'
import WikiHeadlines from './components/WikiHeadlines';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <WikiHeadlines />
        </div>
        <div className="box">
          <RedditHeadlines />
        </div>
      </div>
    </div>
  )
}

export default App;
