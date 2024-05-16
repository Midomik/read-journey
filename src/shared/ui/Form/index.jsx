import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import React from 'react';
import { Button } from '../Button';

export const Form = ({
  defaultValues,
  className,
  submit,
  label,
  children,
  ...rest
}) => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm({
    defaultValues: { defaultValues },
    // resolver: yupResolver(signInModalSchema),
  });

  const childrenWithProps = React.Children.map(children, (child) => {
    if (child.type !== Button) {
      return React.cloneElement(child, { register });
    }
    return child;
  });

  const onSubmit = (data, event) => {
    event.preventDefault();
    submit(data);
    reset;
  };
  return (
    <form
      className={`flex flex-col gap-[8px] ${className}`}
      onSubmit={handleSubmit(onSubmit)}
      {...rest}
    >
      {label && (
        <p className="desktop:ml-[34px] ml-[14px] leading-[129%]">{label}</p>
      )}
      {childrenWithProps}
    </form>
  );
};

Form.propTypes = {
  defaultValues: PropTypes.object,
  className: PropTypes.string,
  submit: PropTypes.func,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};
