import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux/authSelectors";

import Layout from "./components/Layout/Layout";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            isLoggedIn ? <Navigate to="/contacts" /> : <Navigate to="/login" />
          }
        />
        <Route
          path="register"
          element={!isLoggedIn ? <RegisterPage /> : <Navigate to="/contacts" />}
        />
        <Route
          path="login"
          element={!isLoggedIn ? <LoginPage /> : <Navigate to="/contacts" />}
        />
        <Route
          path="contacts"
          element={isLoggedIn ? <ContactsPage /> : <Navigate to="/login" />}
        />
      </Route>
    </Routes>
  );
};

export default App;
