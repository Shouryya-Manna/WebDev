import { useQuery } from "@tanstack/react-query";
import { fetchAllTicketsInfo, fetchMovieInfo } from "./Api";

export function useMovieTicketQueries() {
  const events = useQuery({
    queryKey: ["events"],
    queryFn: fetchMovieInfo,
  });
  return { events };
}

export function useShowAllTicketsQueries() {
  const tickets = useQuery({
    queryKey: ["tickets"],
    queryFn: fetchAllTicketsInfo,
  });
  return{tickets}
}
