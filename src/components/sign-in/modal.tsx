import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Dialog } from '@headlessui/react';
import cntl from 'cntl';
import Modal from '../modal';
import { SignInFormValues } from '../../types';
import LabeledInput from '../form/labeled-input';

interface SignInModalProps {
  open: boolean;
  onCancel: () => void;
  onSignIn: (data: SignInFormValues) => void;
  signInError: string | null;
}

const containerClassName = cntl`
  inline-block
  align-bottom
  bg-white
  rounded-lg
  px-4
  pt-5
  pb-4
  text-left
  overflow-hidden
  shadow-xl
  transform
  transition-all
  sm:my-8
  sm:align-middle
  sm:max-w-lg
  sm:w-full
  sm:p-6
`;

const dialogTitleClassName = cntl`
  text-lg
  leading-6
  font-medium
  text-gray-900
`;

const buttonGroupClassName = cntl`
  mt-5
  sm:mt-6
  sm:grid
  sm:grid-cols-2
  sm:gap-3
  sm:grid-flow-row-dense
`;

const signInButtonClassName = cntl`
  w-full
  inline-flex
  justify-center
  rounded-md
  border
  border-transparent
  shadow-sm
  px-4
  py-2
  bg-indigo-600
  text-base
  font-medium
  text-white
  hover:bg-indigo-700
  focus:outline-none
  focus:ring-2
  focus:ring-offset-2
  focus:ring-indigo-500
  sm:col-start-2
  sm:text-sm
`;

const cancelButtonClassName = cntl`
  mt-3
  w-full
  inline-flex
  justify-center
  rounded-md
  border
  border-gray-300
  shadow-sm
  px-4
  py-2
  bg-white
  text-base
  font-medium
  text-gray-700
  hover:bg-gray-50
  focus:outline-none
  focus:ring-2
  focus:ring-offset-2
  focus:ring-indigo-500
  sm:mt-0
  sm:col-start-1
  sm:text-sm
`;

const SignInModal: React.FC<SignInModalProps> = ({
  open,
  onCancel,
  onSignIn,
  signInError,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInFormValues>();
  const onSubmit: SubmitHandler<SignInFormValues> = (data) => {
    onSignIn(data);
    reset();
  };

  return (
    <Modal open={open} onCancel={onCancel}>
      <div className={containerClassName}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mt-3 sm:mt-5">
              <Dialog.Title as="h3" className={dialogTitleClassName}>
                Sign in to your profile
              </Dialog.Title>
              <div className="mt-2">
                <LabeledInput
                  id="email"
                  type="email"
                  label="E-mail"
                  placeholder="Enter your e-mail"
                  errorMessage={errors.email?.message}
                  {...register('email', { required: true })}
                />
                <LabeledInput
                  id="password"
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  errorMessage={errors.password?.message}
                  {...register('password', { required: true })}
                />
                {signInError !== null ? (
                  <div className="text-red-400">{signInError}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className={buttonGroupClassName}>
            <button
              type="submit"
              className={signInButtonClassName}
              onClick={() => {}}
            >
              Sign In
            </button>
            <button
              type="button"
              className={cancelButtonClassName}
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SignInModal;
