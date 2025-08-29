
import { useQuery } from "@tanstack/react-query";
import type { Post } from "../types/PostType";
import { fetchPosts } from "./Api";


export function useFetchPosts() {
  return useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
}