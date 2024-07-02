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
import { AuthContext } from "./context/AuthContextProvider.jsx";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const { signedUser } = useContext(AuthContext);
  const queryClient = new QueryClient();
  const ProtectedRouter = ({ children }) => {
    if (!signedUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftSide />
          <Outlet />
          <RightSide />
        </div>
      </QueryClientProvider>
    );
  };

  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRouter>
          <Layout />
        </ProtectedRouter>
      ),
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

  return (
    <div>
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
