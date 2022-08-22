import PropTypes from 'prop-types';
import React from 'react';

class Feedback extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  static propTypes = {
    initialValue: PropTypes.number,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  goodIncrease = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutralIncrease = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badIncrease = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    let countTotalFeedback =
      this.state.good + this.state.neutral + this.state.bad;
    let countPositiveFeedbackPercentage = Math.round(
      (this.state.good / countTotalFeedback) * 100
    );

    return (
      <div>
        <p>Please leave feedback</p>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {countTotalFeedback}</p>
        <p>Positive feedback: {countPositiveFeedbackPercentage}%</p>
        <button onClick={this.goodIncrease}>Good</button>
        <button onClick={this.neutralIncrease}>Neutral</button>
        <button onClick={this.badIncrease}>Bad</button>
      </div>
    );
  }
}
export { Feedback };
