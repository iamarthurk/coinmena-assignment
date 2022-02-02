import { User } from './types';

export function findUserById(users: User[], id: string | null) {
  return users.find((u) => u.id === id);
}

export function findUserByCredentials(
  users: User[],
  username: string,
  password: string,
) {
  return users.find((u) => u.username === username && u.password === password);
}
