import React from 'react';
import axios from 'axios';

const Helpfulness = ({reviewId, helpfulness}) => {
  var handleHelpfulClick = () => {
    axios.put(`/reviews/${reviewId}/helpful`);
    // console.log(`Review id ${reviewId} was helpful`);
  };

  var handleReportClick = () => {
    axios.put(`/reviews/${reviewId}/report`);
    // console.log(`Review id ${reviewId} was hurtful`);
  };

  return (
    <div>
      Helpful? <a className="helpful-anchor" onClick={() => { handleHelpfulClick() }}>Yes</a> ({helpfulness}) | <a className="report-anchor" onClick={() => { handleReportClick()}}>Report</a>
    </div>
  );
};

export default Helpfulness;