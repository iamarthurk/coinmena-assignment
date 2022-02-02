import React from 'react';
import cntl from 'cntl';

const containerClassName = cntl`
  ml-10
  space-x-4
`;

const signInButtonClassName = cntl`
  inline-block
  bg-indigo-500
  py-2
  px-4
  border
  border-transparent
  rounded-md
  text-base
  font-medium
  text-white
  hover:bg-opacity-75
`;

interface CtaProps {
  onSignInClick: () => void;
}

const Cta: React.FC<CtaProps> = ({ onSignInClick }) => {
  const handleSignInClick = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    onSignInClick();
  };

  return (
    <div className={containerClassName}>
      <a href="#" onClick={handleSignInClick} className={signInButtonClassName}>
        Sign in
      </a>
    </div>
  );
};

export default Cta;
