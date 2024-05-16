// import { cva } from 'class-variance-authority';
import PropTypes from 'prop-types';
// import { cn } from '../../lib/cn';

// const inputVariants = cva(
//   'w-full text-base text-white flex relative items-center gap-[10px]',
//   {
//     variants: {
//       variant: {
//         primary: 'bg-gray-26 rounded-[12px] h-[50px]',
//       },
//     },
//     defaultVariants: {
//       variant: 'primary',
//     },
//   }
// );

export const Input = ({
  name,
  title,
//   variant,
  register,
//   className,
  ...rest
}) => {
  if (!register) return null;
  return (
    <div className="bg-gray-26 relative flex h-[50px] w-full items-center gap-[10px] rounded-[12px] text-base text-white">
      <span className="text-gray-68 ml-[14px] flex h-full flex-shrink-0 flex-grow items-center text-[16px]">
        {title}
      </span>
      <input
        className=" h-full w-full bg-transparent text-[16px] placeholder:text-[16px] placeholder:text-white focus:border-b focus:border-none focus:border-white focus:outline-none"
        // className={cn(inputVariants({ variant, className }))}
        {...register(name)}
        {...rest}
      />
      {/* <div className="absolute left-0 top-[50%] translate-x-[-50%] translate-y-[-50%]">
        
      </div> */}
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  register: PropTypes.func,
  className: PropTypes.string,
};
