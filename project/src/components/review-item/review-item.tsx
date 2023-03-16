import { Review } from '../../types/review';
import { getMachineReadableDate, getHumanReadableDate } from '../../utils/utils';


type ReviewProps = {
  review: Review;
}

function ReviewItem(props: ReviewProps): JSX.Element {
  const {comment, date, rating, user} = props.review;
  const createdAt = new Date(date);
  const dateHumanReadable = getHumanReadableDate(createdAt);
  const dateMachineReadable = getMachineReadableDate(createdAt);
  // eslint-disable-next-line no-console
  console.log(user.avatar_url);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatar_url} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dateMachineReadable}>{dateHumanReadable}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
