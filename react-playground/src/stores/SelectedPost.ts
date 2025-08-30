import { create } from "zustand";
import type { Post } from "../types/PostType";
import { persist } from "zustand/middleware";

type SelectedState = {
  select: number | null;
  setSelected: (data: number) => void;
  clearSelect: () => void;
};

export const useSelectedStore = create<SelectedState>()(
  persist(
    (set) => ({
      select: null,
      setSelected: (data) => set({ select: data }),
      clearSelect: () => set({ select: null }),
    }),
    {
      name: "selected-post",
    }
  )
);
