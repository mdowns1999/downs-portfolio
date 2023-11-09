import RootLayout from './components/Layout/Root';
import HomePage from './components/Home/HomePage';
import ProjectPage from './components/Projects/ProjectPage';
import ProjectDetailPage from './components/Projects/ProjectDetailPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutPage from './components/About/AboutPage';

const router = createBrowserRouter([
  {
    path:"/",
    element: <RootLayout/>,
    children: [
      {index: true, element:<HomePage/>},
      {path:"about", element: <AboutPage/>},
      {path:"projects", element: <ProjectPage/>},
      {path:"projects:id", element: <ProjectDetailPage/>}
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
