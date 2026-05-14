import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginScreen } from "./pages/LoginScreen";
import { UserSessionScreen } from "./pages/UserSessionsScreen";
import { Dashboard } from "./pages/Dashboard";
import { AppLayout } from "./components/layouts/AppLayout";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/my-sessions",
        element: <UserSessionScreen />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
