import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import cntl from 'cntl';
import { User } from '../../types';
import { usePersistenceStrategy } from '../../hooks/usePersistUser';

interface ProfileMenuProps {
  user: User;
}

const menuButtonClassName = cntl`
  max-w-xs
  bg-white
  flex
  items-center
  text-sm
  rounded-full
  focus:outline-none
  focus:ring-2
  focus:ring-offset-2
  focus:ring-indigo-500
`;

const profilePicClassName = cntl`
  h-8
  w-8
  rounded-full
`;

const menuItemContainerClassName = cntl`
  origin-top-right
  absolute
  right-0
  mt-2
  w-48
  rounded-md
  shadow-lg
  py-1
  bg-white
  ring-1
  ring-black
  ring-opacity-5
  focus:outline-none
`;

const menuItemClassName = cntl`
  cursor-pointer
  block
  px-4
  py-2
  text-sm
  text-gray-700
`;

const ProfileMenu: React.FC<ProfileMenuProps> = ({ user }) => {
  const { logout } = usePersistenceStrategy();

  const handleSignOut = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    logout();
  };

  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button className={menuButtonClassName}>
          <span className="sr-only">Open user menu</span>
          <img className={profilePicClassName} src={user.picUrl} alt="" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={menuItemContainerClassName}>
          <Menu.Item>
            <span className={menuItemClassName}>Hello, {user.name}</span>
          </Menu.Item>
          <Menu.Item>
            <span onClick={handleSignOut} className={menuItemClassName}>
              Sign out
            </span>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileMenu;
