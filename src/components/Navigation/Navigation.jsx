import { StyledNav, StyledNavLink } from "./StyledNavigation";

const Navigation = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/register">
        Register
      </StyledNavLink>
      <StyledNavLink to="/login">
        Login
      </StyledNavLink>
      <StyledNavLink to="/contacts">
        Contacts
      </StyledNavLink>
    </StyledNav>
  );
};

export default Navigation;