// import PropTypes from 'prop-types';
import React from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import { StatisticsTitle } from './App.styled';

class App extends React.Component {
  // static defaultProps = {
  //   initialValue: 0,
  // };
  // static propTypes = {
  //   initialValue: PropTypes.number,
  // };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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
