import { create } from "zustand";
interface StoreState {
  apiToken: string;
  setToken: (nextToken: string) => void;
}

const useApiTokenStore = create<StoreState>()((set) => ({
  apiToken: "",
  setToken: (nextToken) => set(() => ({ apiToken: nextToken })),
}));

export default useApiTokenStore;
