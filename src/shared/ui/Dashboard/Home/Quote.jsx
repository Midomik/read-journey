import PropTypes from 'prop-types';
import img from '../../../assets/images/png/books-img.png';

export const Quote = ({ className }) => {
  return (
    <div
      className={`flex items-center gap-[14px] rounded-[12px] bg-gray-26 px-[20px] py-[15px] text-[14px] ${className}`}
    >
      <img className="h-[40px] w-[40px]" src={img} alt="books icon" />
      <p className="leading-[129%] text-gray-68">
        &quot;Books are
        <span className="text-white"> windows </span>
        to the world, and reading is a journey into the unknown.&quot;
      </p>
    </div>
  );
};

Quote.propTypes = {
  className: PropTypes.string,
};
