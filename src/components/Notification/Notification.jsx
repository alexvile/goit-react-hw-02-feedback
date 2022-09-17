import PropTypes from 'prop-types';
import { NoFeedbackMsg } from './Notification.styled';

const Notification = ({ message }) => {
  return <NoFeedbackMsg>{message}</NoFeedbackMsg>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
