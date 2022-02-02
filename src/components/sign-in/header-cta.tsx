import React from 'react';
import cntl from 'cntl';
import ProfileMenu from './profile-menu';
import { usePersistenceStrategy } from '../../hooks/usePersistUser';

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
  cursor-pointer
`;

interface HeaderCtaProps {
  onSignInClick: () => void;
}

const HeaderCta: React.FC<HeaderCtaProps> = ({ onSignInClick }) => {
  const { user } = usePersistenceStrategy();

  const handleSignInClick = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    onSignInClick();
  };

  return (
    <>
      {typeof user === 'undefined' ? (
        <span onClick={handleSignInClick} className={signInButtonClassName}>
          Sign in
        </span>
      ) : (
        <ProfileMenu user={user} />
      )}
    </>
  );
};

export default HeaderCta;
