import React from "react";
import { useFetchPostbyId } from "../api/Queries";

import { useSelectedStore } from "../stores/SelectedPost";
import { useParams } from "react-router-dom";

function View() {
  const { select } = useSelectedStore();
const {
    data: post,
    isLoading,
    isError,
    error,
  } = useFetchPostbyId(select!);

  if (isLoading) return <p>Loading post...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;
  if (!post) return <p>No post found.</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default View;
