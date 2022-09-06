import PropTypes from 'prop-types';
import React from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Feedback/Statistics';
import Notification from './Feedback/Notification';
import Section from './Feedback/Section';
import { StatisticsTitle } from './App.styled';

class App extends React.Component {
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

  getState = () => {
    const states = Object.keys(this.state);
    return states;
  };
  leaveFeedback = objKey => {
    this.setState(prevState => ({
      [objKey]: prevState[objKey] + 1,
    }));
  };

  render() {
    let countTotalFeedback =
      this.state.good + this.state.neutral + this.state.bad;
    let countPositiveFeedbackPercentage = Math.round(
      (this.state.good / countTotalFeedback) * 100
    );

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={this.getState()}
          onLeaveFeedback={this.leaveFeedback}
        />
        <StatisticsTitle>Statistics</StatisticsTitle>
        {countTotalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    );
  }
}
export default App;
