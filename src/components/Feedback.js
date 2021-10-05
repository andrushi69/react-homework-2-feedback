import React from "react";
import classes from "./Feedback.module.scss"
import Statistics from "./Statistics";
import SelectButtons from "./SelectButtons";

class Feedback extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    feedbacks: 0,
  }

  goodIncrement = () => {
    this.setState({
      good: this.state.good + 1,
      feedbacks: ((this.state.good + 1) * 100 / (this.state.total + 1))
    })
  }
  neutralIncrement = () => {
    this.setState({
      neutral: this.state.neutral + 1,
      feedbacks: ((this.state.good) * 100 / (this.state.total + 1))
    })
  }
  badIncrement = () => {
    this.setState({
      bad: this.state.bad + 1,
      feedbacks: ((this.state.good) * 100 / (this.state.total + 1))
    })
  }
  countTotalFeedback = () => {
    this.setState({total: this.state.total + 1})
  }

  render() {
    const {good} = this.state;
    const {neutral} = this.state;
    const {bad} = this.state;
    const {total} = this.state;
    const {feedbacks} = this.state;
    return (
      <div className={classes.all_content}>
        <h1>Please leave your feedback</h1>
        <div className={classes.buttons_content}>
          <SelectButtons goodIncrement={this.goodIncrement} neutralIncrement={this.neutralIncrement}
                         badIncrement={this.badIncrement} countTotalFeedback={this.countTotalFeedback}/>
        </div>
        {total === 0 ? "NO MESSAGE" :
          (<Statistics good={good} neutral={neutral} bad={bad} total={total} feedbacks={feedbacks}/>)}
      </div>
    )
  }
}

export default Feedback