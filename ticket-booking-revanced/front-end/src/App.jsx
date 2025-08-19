import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Ticket from "./pages/Ticket";
import Event from "./pages/Event";
import TicketTable from "./pages/TicketsTable";
import TicketDetails from "./pages/TicketDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";


function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/event",
          element: <Event />,
        },
        {
          path: "/ticket",
          element: <Ticket />,
        },
        {
          path: "/table",
          element: <TicketTable />,
        },
        {
          path: "/ticket-details",
          element: <TicketDetails/>,
        },
      ],
    },
  ]);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
      <Toaster/>
    </>
  );
}

export default App;
