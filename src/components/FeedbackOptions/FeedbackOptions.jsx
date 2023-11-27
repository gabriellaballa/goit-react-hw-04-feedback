import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.option}>
    {options.map(option => (
      <button
        className={css.statbtn}
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);
export default FeedbackOptions;
