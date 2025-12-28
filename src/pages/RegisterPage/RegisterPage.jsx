import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../../redux/authSlice";
import { selectAuthError, selectIsLoggedIn } from "../../redux/authSelectors";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const authError = useSelector(selectAuthError);

  if (isLoggedIn) {
    navigate("/contacts");
    return null;
  }

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required!";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters!";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required!";
    } else {
      const trimmedEmail = email.trim();

      if (!trimmedEmail.includes("@")) {
        newErrors.email = 'Email must contain "@" symbol';
      } else if (trimmedEmail.startsWith("@") || trimmedEmail.endsWith("@")) {
        newErrors.email = "Invalid email format";
      } else {
        const atIndex = trimmedEmail.indexOf("@");
        const afterAt = trimmedEmail.substring(atIndex + 1);

        if (!afterAt.includes(".")) {
          newErrors.email = 'Email must contain a dot after "@"';
        } else {
          const lastDotIndex = trimmedEmail.lastIndexOf(".");
          const afterLastDot = trimmedEmail.substring(lastDotIndex + 1);

          if (afterLastDot.length < 2) {
            newErrors.email = "Domain extension must be at least 2 characters!";
          } else if (trimmedEmail.includes(" ")) {
            newErrors.email = "Email cannot contain spaces!";
          }
        }
      }
    }

    if (!password) {
      newErrors.password = "Password is required!";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters!";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Password do not match";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      return;
    }

    dispatch(register({ name: name.trim(), email: email.trim(), password }));

    setErrors({});
  };

  return (
    <div>
      <h2>Create account</h2>
      {authError && <div>{authError}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div>{errors.name}</div>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
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
        <div>
          <label htmlFor="confirmPassword">Confirm password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
