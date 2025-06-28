import App from "./App";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import DonatePage from "./pages/Donate";
import HomePage from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import ProjectsPage from "./pages/Projects";
import RegisterPage from "./pages/Register";
import SuperAdminPage from "./pages/Superadmin";

const routes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/admin",
    element:<SuperAdminPage />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/donate",
        element: <DonatePage />
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
];

export default routes;