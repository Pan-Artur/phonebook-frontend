import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: #2c3e50;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 15px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 12px 24px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s;
  border: 2px solid #3498db;
  min-width: 120px;
  text-align: center;

  &:hover {
    background-color: #2980b9;
    border-color: #2980b9;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    text-decoration: none;
  }

  &.active {
    background-color: #e74c3c;
    border-color: white;
  }

  &.active:hover {
    background-color: #c0392b;
    border-color: #d6d6d6ff;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 5px 0;
  }
`;