import React from 'react';
import Overview from '../Overview/Overview.jsx';
import QandA from '../Q&A/Q&A.jsx';
import RatingsAndReviews from '../Ratings&Reviews/Ratings&Reviews.jsx';
import Related_ItemsAndComparison from '../Related_Items&Comparison/Related_Items&Comparison.jsx';



const App = () => {
    return (
    <div>
      <nav>NAV BAR</nav>
      <Overview/>
      <QandA />
      <RatingsAndReviews />
      <Related_ItemsAndComparison />
    </div>
  )
};

export default App;
