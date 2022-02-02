import React from 'react';
import cntl from 'cntl';

interface LabeledInputProps {
  errorMessage: string | undefined;
  label: string;
}

const defaultClassName = cntl`
  my-2
  w-full
`;

const labelClassName = cntl`
  block
  text-sm
  font-medium
`;

const LabeledInput = React.forwardRef<
  HTMLInputElement,
  React.HTMLProps<HTMLInputElement> & LabeledInputProps
>((props, ref) => {
  const { errorMessage, label, ...otherProps } = props;

  return (
    <div>
      <label
        htmlFor={props.id}
        className={`${labelClassName} ${
          errorMessage ? 'text-red-400' : 'text-gray-700'
        }`}
      >
        {errorMessage ? errorMessage : label}
      </label>
      <input ref={ref} className={defaultClassName} {...otherProps} />
    </div>
  );
});

export default LabeledInput;
