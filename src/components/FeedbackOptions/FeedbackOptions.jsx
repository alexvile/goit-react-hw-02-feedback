import React from 'react';
import PropTypes from 'prop-types';
import { List, Button, Item } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => (
        <Item key={option}>
          <Button
            type="button"
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
