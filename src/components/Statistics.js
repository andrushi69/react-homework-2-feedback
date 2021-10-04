import React from "react";

const Statistics = ({good, bad, total, neutral, feedbacks}) =>
  <div>
    Statistics
    <br/>
    Good: <span>{good}</span>
    <br/>
    Neutral: <span>{neutral}</span>
    <br/>
    Bad: <span>{bad}</span>
    <br/>
    Total: <span>{total}</span>
    <br/>
    Positive Feedbacks: <span>{Math.round(feedbacks, 2)}%</span>
  </div>

export default Statistics