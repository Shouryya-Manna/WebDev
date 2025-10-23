import { type loginSchemaType } from "./schemas/schema";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type FormState = Partial<loginSchemaType> & {
  setData: (data: Partial<loginSchemaType>) => void;
  resetData: () => void;
};

const initialState: Partial<loginSchemaType> = {};

export const useFormStore = create<FormState>()(
  persist(
    (set) => ({
      ...initialState,

      setData: (data) =>
        set((state) => ({
          ...state,
          ...data,
        })),

      resetData: () => {
     
        set({ ...initialState });

        if (typeof localStorage !== "undefined") {
          localStorage.removeItem("form-storage"); 
        }
      },
    }),
    {
      name: "form-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
