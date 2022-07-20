import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <p>404 Page not found</p>
      <Link to="/">Back to main page</Link>
    </>
  );
}

export default NotFoundScreen;
