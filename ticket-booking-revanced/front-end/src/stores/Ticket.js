import { create } from "zustand";

const useTicketStore = create((set) => ({
  selectedTicket: null,
  setSelectedTicket: (ticket) => set((state) => ({ selectedTicket: ticket })),
  clearTicket: () =>
    set((state) => ({
      selectedTicket: null,
    })),
}));

export const useSelectedTicket = () => useTicketStore();
