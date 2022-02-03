import { Fragment } from 'react';
import cntl from 'cntl';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

const menuClassName = cntl`
  relative
  inline-block
  text-left
`;

const menuButtonClassName = cntl`
  inline-flex
  justify-center
  w-full
  rounded-md
  border
  border-gray-300
  shadow-sm
  px-4
  py-2
  bg-white
  text-sm
  font-medium
  text-gray-700
  hover:bg-gray-50
  focus:outline-none
  focus:ring-2
  focus:ring-offset-2
  focus:ring-offset-gray-100
  focus:ring-indigo-500
`;

const chevronIconClassName = cntl`
  -mr-1
  ml-2
  h-5
  w-5
`;

const menuItemContainerClassName = cntl`
  origin-top-right
  absolute
  right-0
  mt-2
  w-56
  rounded-md
  shadow-lg
  bg-white
  ring-1
  ring-black
  ring-opacity-5
  focus:outline-none
  z-50
`;

const menuItemClassName = cntl`
  text-gray-700
  block
  px-4
  py-2
  text-sm
  cursor-pointer
`;

export default function Actions() {
  return (
    <Menu as="div" className={menuClassName}>
      <div>
        <Menu.Button className={menuButtonClassName}>
          Actions
          <ChevronDownIcon
            className={chevronIconClassName}
            aria-hidden="true"
          />
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
          <div className="py-1">
            <Menu.Item>
              <span className={menuItemClassName}>Buy</span>
            </Menu.Item>
            <Menu.Item>
              <span className={menuItemClassName}>Sell</span>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
