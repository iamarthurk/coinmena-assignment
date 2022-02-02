import create from 'zustand';
import { User } from '../types';

interface State {
  loggedInUserId: string | null;
  login: (user: User) => void;
  logout: () => void;
}

const useStore = create<State>((set) => ({
  loggedInUserId: null,
  login: (user: User) =>
    set((state: State) => ({ ...state, loggedInUserId: user.id })),
  logout: () => set((state: State) => ({ ...state, loggedInUserId: null })),
}));

export default useStore;
