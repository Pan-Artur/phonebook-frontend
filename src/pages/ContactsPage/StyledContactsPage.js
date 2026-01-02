import styled from "styled-components";

export const StyledContactsPage = styled.div`
  max-width: 1200px;
  margin: 80px auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 15px;
    border-bottom: 2px solid #3498db;

    h1 {
      color: #2c3e50;
      margin: 0;
      font-size: 32px;
    }
  }

  .content {
    display: flex;
    gap: 30px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .loading, .error {
    text-align: center;
    padding: 40px;
    font-size: 18px;
    color: #34495e;
  }

  .error {
    button {
      margin-left: 15px;
      padding: 8px 16px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #2980b9;
      }
    }
  }
`;