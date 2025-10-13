import { cn } from "@/lib/utils";
import { createContext, useContext, type PropsWithChildren } from "react";

export type BlogCardContext = {
  blog: Blog;
};

const BlogCardContext = createContext<BlogCardContext | undefined>(undefined);

function useBlogCardContext() {
  const context = useContext(BlogCardContext);
  if (!context) {
    throw new Error("useBlogCardContext must be used within a Blog Card");
  }
  return context;
}

export type Blog = {
  id: number;
  image: string;
  title: string;
  description: string;
};

export type BlogCardProps = PropsWithChildren & {
  blog: Blog;
};

export default function BlogCard({ children, blog }: BlogCardProps) {
  return (
    <BlogCardContext.Provider value={{ blog }}>
      <div className="border w-96 h-96 rounded-4xl bg-blue-200 flex flex-col justify-between items-center p-2 ">
        {children}
      </div>
    </BlogCardContext.Provider>
  );
}

export type BlogCardImageProps = {
  className?: string;
};

BlogCard.Image = function BlogCardImage({ className }: BlogCardImageProps) {
  const { blog } = useBlogCardContext();
  return (
    <div className={cn() + className}>
      <img
        src={blog.image}
        className="w-full h-full object-fill  rounded-3xl"
      ></img>
    </div>
  );
};

BlogCard.Title = function BlogCardTitle() {
  const { blog } = useBlogCardContext();
  return (
    <h1 className="text-2xl font-extrabold text-blue-600">{blog.title}</h1>
  );
};

BlogCard.Description = function BlogCardDescription() {
  const { blog } = useBlogCardContext();
  return <p className="text-blue-500">{blog.description}</p>;
};
