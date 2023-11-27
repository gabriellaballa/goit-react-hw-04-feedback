import Section from './Section/Section';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import React, { useState } from 'react';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleReview = category => {
    setState(prevState => ({
      ...prevState,
      [category]: prevState[category] + 1,
    }));
  };

  const countTotalFeedback = () => state.good + state.neutral + state.bad;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((state.good / total) * 100);
  };

  const feedbackOptions = ['good', 'neutral', 'bad'];
  const showStatistics = countTotalFeedback() > 0;

  return (
    <div className="feedback">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleReview}
        />
      </Section>

      <Section title="Statistics">
        {showStatistics ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
