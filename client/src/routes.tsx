import { RouterProvider, createHashRouter } from "react-router-dom";
import { MainPage, ServicePage } from "./pages";

const router = createHashRouter([
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
      <RouterProvider router={router} />
    </>
  );
}

export default Routes;
