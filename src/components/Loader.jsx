import PropTypes from 'prop-types';
import { GridLoader, SyncLoader } from 'react-spinners';

const Loader = ({ size = 50, loader }) => {
  return (
    <div
      className={`flex justify-center items-center text-center !w-full ${
        !loader && 'my-20'
      }`}
    >
      {!loader ? (
        <GridLoader className="" color="#36d7b7" size={size} />
      ) : (
        <SyncLoader color="#36d7b7" size={11} />
      )}
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.any,
  loader: PropTypes.any,
};

export default Loader;
