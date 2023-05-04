import { LoadMoreButton } from './Button.styled';

const LoadMore = ({ buttonClick }) => {
  return (
    <LoadMoreButton type="button" onClick={buttonClick}>
      Load more
    </LoadMoreButton>
  );
};

export default LoadMore;
