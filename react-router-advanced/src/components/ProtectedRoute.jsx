import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" />; // redirect if not logged in
  }
  return children;
}
