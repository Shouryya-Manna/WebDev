import { useMutation } from "@tanstack/react-query";
import { createMovieInfo, createTicketInfo } from "./Api";

export function useMovieTicketMutations() {

  const eventMutation = useMutation({
    mutationFn: createMovieInfo,
    onSuccess: () => {
      console.log("Event Created ...");
    },
    onError: (err) => {
      console.log("Error Creating Event", err);
    },
  });


  const ticketMutation = useMutation({
    mutationFn: createTicketInfo,
    onSuccess: () => {
      console.log("Ticket Created Successfully");
    },
  });

  return { eventMutation, ticketMutation };
}
