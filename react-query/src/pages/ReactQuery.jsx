import React  from "react";
import { fetchPosts } from "../Api/Api";
import { useQuery } from "@tanstack/react-query";

function ReactQuery() {
  // const [posts, setPosts] = useState([]);

 

  // useEffect(() => {
  //   getPostsData();
  // }, []);

  const {data} = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  })

  return (
    <div>
      React-Query
      <div>
        <ul>
          {data?.map((data) => {
            return (
              <li key={data.id}>
                <p>{data.title}</p>
                <p>{data.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ReactQuery;
