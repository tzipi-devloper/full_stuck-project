import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import AppLayout from "../components/AppLayout";
import Footer from "../components/Footer";
import CompetitionList from "../features/competitions/CompetitionList";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ":competitionID",
        element: <CompetitionList />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Footer />,
      },
  
    ],
  },
]);

export default router;
