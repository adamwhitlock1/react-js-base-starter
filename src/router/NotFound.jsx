import { RoutePaths } from './routes.js';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="px-3 py-2 text-lg font-medium">
        Page not found.
      </h3>
      <Link to={RoutePaths.HOME}>
        Go Home
      </Link>
    </div>
  );
};
