import { useQuery } from "@tanstack/react-query";
import { fetchMovieInfo} from "./Api";

export function useMovieTicketQueries() {

  const event = useQuery({
    queryKey: ["events"],
    queryFn: fetchMovieInfo,
  });
  return { event };
}
