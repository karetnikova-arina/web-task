import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage, ServicePage } from "./pages";
import { Header } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/service/:service",
    element: <ServicePage />,
  },
]);

function Routes() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default Routes;
