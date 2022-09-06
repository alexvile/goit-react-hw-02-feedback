import React from 'react';
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
