import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "./Header";

export function AppLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <>
      <header>
        <Header handleLogout={handleLogout} />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}