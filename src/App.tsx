import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import PatientsPage from "./pages/PatientsPage";
import CalendarPage from "./pages/CalendarPage";
import AppointmentPage from "./pages/AppointmentPage";
import RecordingPage from "./pages/RecordingPage";
import DocumentsPage from "./pages/DocumentsPage";
import CreateAppointmentPage from "./pages/CreateAppointmentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/patients", element: <PatientsPage /> },
      { path: "/calendar", element: <CalendarPage /> },
      { path: "/appointments/:id", element: <AppointmentPage /> },
      { path: "/record", element: <RecordingPage /> },
      { path: "/documents", element: <DocumentsPage /> },
      { path: "/appointments/new", element: <CreateAppointmentPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
