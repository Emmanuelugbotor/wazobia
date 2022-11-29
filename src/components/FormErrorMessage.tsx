import React, { FC } from 'react';
import classNames from 'classnames';

export type FormErrorMessageProps = {
  className?: string;
  children:string
};

export const FormErrorMessage: FC<FormErrorMessageProps> = ({
  children,
  className,
}) => (
  <p
  style={{color:'red'}}
    className={classNames(
      'font-serif text-sm text-left block text-red-600',
      className
    )}
  >
    {children}
  </p>
);
