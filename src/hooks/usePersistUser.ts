import { User } from '../types';
import useStore from './useStore';
import { findUserById } from '../utils';
import data from '../users.json';
import { useMemo } from 'react';

interface UserPersistenceStrategy {
  login: (user: User) => void;
  logout: () => void;
  user: User | undefined;
}

function useMemoryPersistence(): UserPersistenceStrategy {
  const { users } = data;
  const { login, logout, loggedInUserId } = useStore(
    ({ login, logout, loggedInUserId }) => ({
      login,
      logout,
      loggedInUserId,
    }),
  );

  const user = useMemo<User | undefined>(
    () => findUserById(users, loggedInUserId),
    [users, loggedInUserId],
  );

  return {
    login,
    logout,
    user,
  };
}

export function usePersistenceStrategy(): UserPersistenceStrategy {
  return useMemoryPersistence();
}
