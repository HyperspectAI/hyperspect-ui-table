import React from 'react';

export interface ButtonProps {
  label: string
}

function Button(props: ButtonProps): JSX.Element {
  const { label } = props;
  return <button type="button">{label}</button>;
}

export default Button;
