import React from 'react';
import Overview from '../Overview/Overview.jsx';
import QandA from '../Q&A/Q&A.jsx';
import RatingsAndReviews from '../Ratings&Reviews/Ratings&Reviews.jsx';
import Related_Items_Comparison from '../Related_Items_Comparison/Related_Items_Comparison.jsx';



const App = () => {
    return (
    <div>
      <nav>NAV BAR</nav>
      <Overview/>
      <QandA />
      <RatingsAndReviews />
      <Related_Items_Comparison />
    </div>
  )
};

export default App;
