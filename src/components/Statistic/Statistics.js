import React from "react";
import classes from "../Feedback/Feedback.module.scss";

const Statistics = ({good, bad, total, neutral, feedbacks}) =>
  <div className={classes.statistics}>
    <h2>Statistics</h2>
    <ul className={classes.statistics_list}>
      <li>
        <span>Good:</span>
        <span>{good}</span>
      </li>
      <li>
        <span>Neutral:</span>
        <span>{neutral}</span>
      </li>
      <li>
        <span>Bad:</span>
        <span>{bad}</span>
      </li>
      <li>
        <span>Total:</span>
        <span>{total}</span>
      </li>
      <li>
        <span>Positive Feedbacks:</span>
        <span>{Math.round(feedbacks, 2)}%</span>
      </li>
    </ul>
  </div>

export default Statistics