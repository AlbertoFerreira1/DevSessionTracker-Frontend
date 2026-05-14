import { Navigate } from "react-router-dom";
import { isTokenValid } from "../../services/tokenService";

type Props = {
  children: React.ReactNode;
};

export function ProtectedRoute({ children }: Props) {
  const token = localStorage.getItem("token");

  if (!isTokenValid(token)) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}