import { Review, Reviews } from '../../types/review';
import ReviewItem from '../review-item/review-item';

type ReviewsListProps = {
  reviews: Reviews;
}
function ReviewsList(props: ReviewsListProps): JSX.Element {
  const reviews = props.reviews;

  return (
    <ul className="reviews__list">
      {reviews.map((review: Review) => <ReviewItem review={review} key={review.id}/>)}
    </ul>
  );
}

export default ReviewsList;

