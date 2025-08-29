import axios from "axios";
import type { Post } from "../types/PostType";


const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export async function fetchPosts(): Promise<Post[]> {
  const response = await api.get<Post[]>("/posts");
  return response.data;
}