import { User } from './types';

export function findUserById(users: User[], id: string | null) {
  return users.find((u) => u.id === id);
}

export function findUserByCredentials(
  users: User[],
  email: string,
  password: string,
) {
  return users.find((u) => u.email === email && u.password === password);
}
