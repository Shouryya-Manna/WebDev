
import { useFetchPosts } from "./api/Queries";

function App() {
  const { data: posts} = useFetchPosts();
  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
export default App;
