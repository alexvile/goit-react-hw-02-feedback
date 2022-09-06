// import PropTypes from 'prop-types';
// import React from 'react';
// import FeedbackOptions from './FeedbackOptions';
// import Statistics from './Statistics';
// import Notification from './Notification';

// class Feedback extends React.Component {
//   static defaultProps = {
//     initialValue: 0,
//   };
//   static propTypes = {
//     initialValue: PropTypes.number,
//   };

//   state = {
//     good: this.props.initialValue,
//     neutral: this.props.initialValue,
//     bad: this.props.initialValue,
//   };

//   getState = () => {
//     const states = Object.keys(this.state);
//     return states;
//   };
//   leaveFeedback = objKey => {
//     // console.log(objKey);
//     this.setState(prevState => ({
//       [objKey]: prevState[objKey] + 1,
//     }));
//   };

//   render() {
//     let countTotalFeedback =
//       this.state.good + this.state.neutral + this.state.bad;
//     let countPositiveFeedbackPercentage = Math.round(
//       (this.state.good / countTotalFeedback) * 100
//     );

//     return (
//       <div>
//         <p>Please leave feedback</p>
//         {countTotalFeedback === 0 ? (
//           <Notification message="There is no feedback" />
//         ) : (
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={countTotalFeedback}
//             positivePercentage={countPositiveFeedbackPercentage}
//           />
//         )}

//         <FeedbackOptions
//           options={this.getState()}
//           onLeaveFeedback={this.leaveFeedback}
//         />
//       </div>
//     );
//   }
// }
// export { Feedback };
