import PropTypes from 'prop-types';

export const Dashboard = ({ children, ...rest }) => {
  return (
    <div
      className="bg-gray-1f w-[353px] rounded-[30px] p-[20px] pt-[40px] "
      {...rest}
    >
      {children}
    </div>
  );
};

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
};
