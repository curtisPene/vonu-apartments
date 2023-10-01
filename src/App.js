import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home";
import ResRequest, { action as requestAction } from "./pages/ResRequest";
import ApartmentInfo from "./pages/ApartmentInfo";
import RequestConfirmationPage from "./pages/RequestConfirmation";
import PoliciesPage from "./pages/Policies";
import ErrorPage from "./pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "/reservations",
          element: <ResRequest />,
          action: requestAction,
        },
        {
          path: "/reservations/confirmation",
          element: <RequestConfirmationPage />,
        },
        { path: "/apartment-info", element: <ApartmentInfo /> },
        { path: "/policies", element: <PoliciesPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
