import RootLayout from "./components/Layout/Root";
import HomePage from "./components/Home/HomePage";
import ProjectPage from "./components/Projects/ProjectPage";
import ProjectDetailPage from "./components/Projects/ProjectDetailPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/UserFeedback/ErrorPage";
import AboutPage from "./components/About/AboutPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "projects", element: <ProjectPage /> },
        { path: "projects/:id", element: <ProjectDetailPage /> },
      ],
    },
  ],
  { basename: "/downs-portfolio" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
