import BlogCard from "./components/BlogCard";
import image from "./assets/bird.jpg";
function App() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <BlogCard
          blog={{
            id: 1,
            image: image,
            title: "Birds",
            description: "Hello Birds 123",
          }}
        >
          <BlogCard.Image />
          <BlogCard.Title />
          <BlogCard.Description />
        </BlogCard>
      </div>
    </>
  );
}

export default App;
