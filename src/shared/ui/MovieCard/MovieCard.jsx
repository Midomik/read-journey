import PropTypes from 'prop-types';

export const MovieCard = ({ title, author, imageUrl }) => {
  return (
    <>
      <img
        className="mb-[8px] h-[208px] w-[137px] rounded-[8px]"
        src={imageUrl}
        alt={title}
      />
      <h3 className="mb-[2px] overflow-hidden text-ellipsis whitespace-nowrap font-[700] leading-[129%] ">
        {title}
      </h3>
      <p className="text-[10px] leading-[120%] text-gray-68">{author}</p>
    </>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  imageUrl: PropTypes.string,
};
