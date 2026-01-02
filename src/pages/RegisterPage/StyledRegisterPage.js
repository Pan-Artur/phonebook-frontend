import styled from "styled-components";

export const StyledRegisterPage = styled.div`
  max-width: 400px;
  margin: 40px auto 50px;
  padding: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h2 {
    color: #2c3e50;
    margin-bottom: 25px;
    text-align: center;
    font-size: 24px;
  }

  form {
    margin-bottom: 20px;
  }

  div {
    margin-bottom: 20px;

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: #34495e;
      font-size: 14px;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"] {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 16px;
      box-sizing: border-box;
      transition: border-color 0.3s;

      &:focus {
        outline: none;
        border-color: #3498db;
      }
    }

    & > div {
      margin-top: 5px;
      color: #e74c3c;
      font-size: 14px;
      min-height: 20px;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 12px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #2980b9;
    }

    &:active {
      transform: translateY(1px);
    }
  }

  p {
    text-align: center;
    color: #34495e;
    margin-top: 20px;
    font-size: 14px;

    a {
      color: #3498db;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.2s;

      &:hover {
        color: #2980b9;
        text-decoration: underline;
      }
    }
  }

  & > div {
    background-color: #e74c3c;
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 14px;
  }
`;