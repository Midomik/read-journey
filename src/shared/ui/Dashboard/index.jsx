import PropTypes from 'prop-types';

export const Dashboard = ({ children, className, ...rest }) => {
  return (
    <div
      className={` box-border rounded-[30px] bg-gray-1f pt-[40px] mobile-sm:p-[20px] tablet:p-[32px] desktop:min-w-[353px] desktop:max-w-[353px] desktop:p-[20px] ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
