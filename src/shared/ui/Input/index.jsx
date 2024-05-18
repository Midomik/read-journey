// import { cva } from 'class-variance-authority';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { ErrorIcon } from '../../assets/icons/ErrorIcon';
import { SuccIcon } from '../../assets/icons/SuccIcon';
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
  //   className,
  register,
  unregister,
  validate,
  isRegister = true,
  errors,
  touchedFields,
  type = 'text',
  eyeIcon,
  checkPassword,
  ...rest
}) => {
  if (!register) return null;

  // console.log(errors[name]?.message);

  useEffect(() => {
    if (!isRegister) {
      unregister('name');
    }
  }, [isRegister]);

  const getInputClasses = (fieldName) => {
    if (!touchedFields[fieldName]) {
      return 'border-none';
    }

    return validate
      ? errors[fieldName]
        ? 'border border-[#e90516]'
        : 'border border-[#30b94d]'
      : 'border-none';
  };

  return (
    <>
      {isRegister && (
        <div>
          <div
            className={`relative flex h-[50px] w-full items-center gap-[10px] rounded-[12px] bg-gray-26 text-base text-white ${getInputClasses(name)}`}
          >
            <span className="ml-[14px] flex h-full flex-shrink-0 flex-grow items-center text-[14px] text-gray-68">
              {title}
            </span>
            <input
              className=" h-full w-full rounded-[12px] border-none bg-transparent text-[14px] placeholder:text-[14px] placeholder:text-white focus:border-none focus:border-white focus:outline-none"
              // className={cn(inputVariants({ variant, className }))}
              // {...(isRegister ? { ...register(name) } : '')}
              type={type}
              autoComplete={name}
              {...register(name)}
              {...rest}
            />

            <div className="absolute right-0 top-[50%] translate-x-[-50%] translate-y-[-50%] justify-center">
              <div
                onMouseDown={() => checkPassword(true, 1)}
                onMouseUp={() => checkPassword(false, 2)}
                onMouseLeave={() => checkPassword(false, 3)}
              >
                {eyeIcon}
              </div>

              {getInputClasses(name) === 'border border-[#e90516]' && (
                <ErrorIcon />
              )}
              {getInputClasses(name) === 'border border-[#30b94d]' && (
                <SuccIcon />
              )}
            </div>
          </div>
          {errors[name] && (
            <p
              className={`ml-[14px] mt-[8px] text-[12px] leading-[117%] ${errors[name] ? 'text-[#e90516]' : 'text-[#30b94d]'}`}
            >
              {errors[name]?.message}
            </p>
          )}
        </div>
      )}
    </>
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  variant: PropTypes.string,
  register: PropTypes.func,
  unregister: PropTypes.func,
  className: PropTypes.string,
  isRegister: PropTypes.bool,
  errors: PropTypes.object,
  touchedFields: PropTypes.object,
  validate: PropTypes.bool,
  type: PropTypes.string,
  eyeIcon: PropTypes.node,
  checkPassword: PropTypes.func,
};
