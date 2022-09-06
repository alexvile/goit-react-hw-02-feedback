import React from 'react';
import { Item, Total } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {total}</Item>
      <Total>Positive feedback: {positivePercentage}%</Total>
    </div>
  );
};

export default Statistics;
