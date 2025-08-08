import React, { useEffect, useState } from "react";
import { fetchPosts } from "../Api/Api";

function Traditional() {
  const [posts, setPosts] = useState([]);

  const getPostsData = async () => {
    try {
      const res = await fetchPosts();
      console.log(res);

      res.status === 200 ? setPosts(res.data) : [];
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <div>
      Traditional
      <div>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <p>{post.title}</p>
                <p>{post.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Traditional;
