import { useQuery } from "@tanstack/react-query";
import { fetchMovieInfo} from "./Api";

export function useMovieTicketQueries() {

  const events = useQuery({
    queryKey: ["events"],
    queryFn: fetchMovieInfo,
  });
  return { events };
}
