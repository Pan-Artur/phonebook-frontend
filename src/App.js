import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadFromLocalStorage } from "./redux/authSlice";
import { selectIsLoggedIn } from "./redux/authSelectors";

import Layout from "./components/Layout/Layout";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

const App = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(loadFromLocalStorage());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              isLoggedIn ? (
                <Navigate to="/contacts" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="register"
            element={
              !isLoggedIn ? <RegisterPage /> : <Navigate to="/contacts" />
            }
          />
          <Route
            path="login"
            element={!isLoggedIn ? <LoginPage /> : <Navigate to="/contacts" />}
          />
          <Route
            path="contacts"
            element={isLoggedIn ? <ContactsPage /> : <Navigate to="/login" />}
          />
          <Route
            path="*"
            element={
              <div className="error-page">
                <h1>404</h1>
                <p>Сторінку не знайдено</p>
                {isLoggedIn ? (
                  <a href="/contacts">Перейти до контактів</a>
                ) : (
                  <a href="/login">Увійти в систему</a>
                )}
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
