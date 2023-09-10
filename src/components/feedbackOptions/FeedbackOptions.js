import { FeedbackOptionsBtn } from 'components/feedbackOptionsBtn.js/FeedbackOptionsBtn';
import { Ul } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onAddState }) => {
  return (
    <div>
      <Ul>
        {options.map(item => (
          <li key={item}>
            <FeedbackOptionsBtn btnName={item} btnState={onAddState} />
          </li>
        ))}
      </Ul>
    </div>
  );
};
