import styled from "styled-components";

export const StyledUserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 15px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

  span {
    color: #34495e;
    font-weight: 500;
  }

  button {
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 3px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s;

    &:hover {
      background-color: #c0392b;
    }
  }
`;