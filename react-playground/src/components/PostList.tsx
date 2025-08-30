import React from "react";
import { useFetchPosts } from "../api/Queries";
import { useNavigate } from "react-router-dom";
import { useSelectedStore } from "../stores/SelectedPost";

function PostList() {
  const { data: posts } = useFetchPosts();
  const navigate = useNavigate();
  const {setSelected} = useSelectedStore();
  return (
    <div>
      <ul className="flex flex-col">
        {posts?.map((post) => (
          <button
            key={post.id}
            onClick={() => {
              setSelected(post.id)
              navigate(`/${post.id}/view`);     
            }}
          >
            {post.title}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
