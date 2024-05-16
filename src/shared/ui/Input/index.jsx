import { cva } from 'class-variance-authority';
import PropTypes from 'prop-types';
import { cn } from '../../lib/cn';

const inputVariants = cva('w-full bg-transparent text-base text-white', {
  variants: {
    variant: {
      primary: 'bg-gray-26 rounded-[12px] h-[50px]',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export const Input = ({
  name,
  title,
  variant,
  register,
  className,
  ...rest
}) => {
  const handleInputChange = (event) => {
    if (event.target.value.length < `${title} `.length) {
      event.target.value = `${title} `;
    }
  };

  if (!register) return null;
  return (
    <div className="relative">
      <input
        className={cn(inputVariants({ variant, className }))}
        defaultValue={`${title} `}
        {...register(name, {
          onChange: handleInputChange,
          setValueAs: (v) => v.replace(`${title} `, '').trim(),
        })}
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
