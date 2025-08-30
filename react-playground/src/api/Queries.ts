
import { useQuery } from "@tanstack/react-query";
import type { Post } from "../types/PostType";
import { fetchPostById, fetchPosts } from "./Api";
import { use } from "react";


export function useFetchPosts() {
  return useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
}

export function useFetchPostbyId(id:number){
  return useQuery<Post>({
    queryKey:["post",id],
    queryFn:()=>fetchPostById(id),
    enabled: !!id
  })
}