import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../redux/authSlice";
import { selectAuthError, selectIsLoggedIn } from "../../redux/authSelectors";
import { StyledLoginPage } from "./StyledLoginPage";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const authError = useSelector(selectAuthError);

  if (isLoggedIn) {
    navigate("/contacts");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email) newErrors.email = "Email is required!";
    if (!password) newErrors.password = "Password is required!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    dispatch(login({ email, password }));
  };

  return (
    <StyledLoginPage>
      <h2>Login</h2>
      {authError && <div>{authError}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div>{errors.email}</div>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div>{errors.password}</div>}
        </div>
        <button type="submit">
          Login
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/register">Register here</Link>
      </p>
    </StyledLoginPage>
  );
};

export default LoginPage;