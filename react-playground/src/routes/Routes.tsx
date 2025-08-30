import { createBrowserRouter } from "react-router-dom";
import PostList from "../components/PostList";
import View from "../components/View";

  export const router = createBrowserRouter([
    {
      path:"/",
      element: <PostList/>,
    },
    {
      path:"/:id/view",
      element: <View/>
    }
  ])