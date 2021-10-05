import React from "react";
import classes from "./Feedback.module.scss";

const Statistics = ({good, bad, total, neutral, feedbacks}) =>
  <div  className={classes.statistics}>
      <h2>Statistics</h2>
      <span>Good:  {good}</span>
      <span>Neutral:  {neutral}</span>
      <span>Bad:  {bad}</span>
      <span>Total:  {total}</span>
      <span>Positive Feedbacks:  {Math.round(feedbacks, 2)}%</span>
  </div>

export default Statistics