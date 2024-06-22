import "./App.css";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import RightSide from "./components/rightSide/RightSide.jsx";
import LeftSide from "./components/leftSide/LeftSide.jsx";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContextProvider.jsx";

function App() {
  const currentUser = true;
  const ProtectedRouter = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  const Layout = () => {
    return (
      <>
        <Navbar />
        <div style={{ display: "flex" }}>
          <ProtectedRouter>
            <LeftSide />
            <Outlet />
            <RightSide />
          </ProtectedRouter>
        </div>
      </>
    );
  };

  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  const { mode } = useContext(ThemeContext);
  return (
    <div className={mode ? "lightApp" : "darkApp"}>
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
