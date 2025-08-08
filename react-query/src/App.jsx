import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Traditional from "./pages/Traditional";
import ReactQuery from "./pages/ReactQuery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/traditional",
        element: <Traditional />,
      },
      {
        path: "/react-query",
        element: <ReactQuery />,
      },
    ],
  },
]);

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={route}>
        <div>TanStack Query</div>
      </RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
