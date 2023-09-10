import { Button } from './FeedbackOptionsBtn.styled';

export const FeedbackOptionsBtn = ({ btnName, btnState }) => {
  return <Button onClick={() => btnState(btnName)}>{btnName}</Button>;
};
